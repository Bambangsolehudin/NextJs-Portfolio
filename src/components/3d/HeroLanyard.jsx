import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

const CARD_GLB = "/card.glb";
const LANYARD_TEXTURE = "/lanyard/lanyard.png";

extend({ MeshLineGeometry, MeshLineMaterial });

function HeroBand({ maxSpeed = 36, minSpeed = 10 }) {
  const band = useRef(null);
  const fixed = useRef(null);
  const jointA = useRef(null);
  const jointB = useRef(null);
  const jointC = useRef(null);
  const card = useRef(null);

  const vec = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();

  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 5.5,
    linearDamping: 2.4,
  };

  const { nodes, materials } = useGLTF(CARD_GLB);
  const texture = useTexture(LANYARD_TEXTURE);
  const { width, height } = useThree((state) => state.size);
  const curve = useMemo(() => {
    const nextCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
    ]);
    nextCurve.curveType = "chordal";
    return nextCurve;
  }, []);
  const configuredTexture = useMemo(() => {
    const nextTexture = texture.clone();
    nextTexture.wrapS = THREE.RepeatWrapping;
    nextTexture.wrapT = THREE.RepeatWrapping;
    nextTexture.needsUpdate = true;
    return nextTexture;
  }, [texture]);
  const [dragged, setDragged] = useState(false);
  const [hovered, setHovered] = useState(false);

  useRopeJoint(fixed, jointA, [[0, 0, 0], [0, 0, 0], 0.95]);
  useRopeJoint(jointA, jointB, [[0, 0, 0], [0, 0, 0], 0.95]);
  useRopeJoint(jointB, jointC, [[0, 0, 0], [0, 0, 0], 0.95]);
  useSphericalJoint(jointC, card, [[0, 0, 0], [0, 1.38, 0]]);

  useEffect(() => {
    if (!hovered && !dragged) {
      document.body.style.cursor = "auto";
      return undefined;
    }

    document.body.style.cursor =
      dragged && typeof dragged !== "boolean" ? "grabbing" : "grab";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [dragged, hovered]);

  useFrame((state, delta) => {
    if (
      !fixed.current ||
      !jointA.current ||
      !jointB.current ||
      !jointC.current ||
      !card.current
    ) {
      return;
    }

    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, jointA, jointB, jointC, fixed].forEach((ref) => {
        ref.current?.wakeUp();
      });

      card.current.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: Math.max(-1.5, Math.min(1.5, vec.z - dragged.z)),
      });
    } else {
      const t = state.clock.getElapsedTime();
      fixed.current.setNextKinematicTranslation({
        x: Math.sin(t * 0.9) * 0.035,
        y: 3.95 + Math.cos(t * 1.2) * 0.025,
        z: 0,
      });
    }

    [jointA, jointB].forEach((ref) => {
      if (!ref.current.lerped) {
        ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
      }

      const distance = ref.current.lerped.distanceTo(ref.current.translation());
      const clampedDistance = Math.max(0.1, Math.min(1, distance));

      ref.current.lerped.lerp(
        ref.current.translation(),
        delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
      );
    });

    curve.points[0].copy(jointC.current.translation());
    curve.points[1].copy(jointB.current.lerped);
    curve.points[2].copy(jointA.current.lerped);
    curve.points[3].copy(fixed.current.translation());
    band.current.geometry.setPoints(curve.getPoints(24));

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({
      x: ang.x - rot.x * 0.18,
      y: ang.y - rot.y * 0.2,
      z: ang.z - rot.z * 0.22,
    });
  });

  return (
    <>
      <group position={[0, 3.95, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="kinematicPosition" />
        <RigidBody ref={jointA} {...segmentProps} position={[0.45, -0.04, 0]}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody ref={jointB} {...segmentProps} position={[0.95, -0.08, 0]}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody ref={jointC} {...segmentProps} position={[1.5, -0.14, 0]}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody
          ref={card}
          {...segmentProps}
          position={[1.95, -0.18, 0]}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.1, 0.08]} />
          <group
            scale={2.6}
            position={[0, -1.45, 0]}
            onPointerDown={(event) => {
              event.stopPropagation();
              event.target.setPointerCapture(event.pointerId);
              setDragged(
                new THREE.Vector3()
                  .copy(event.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
            onPointerUp={(event) => {
              event.stopPropagation();
              event.target.releasePointerCapture(event.pointerId);
              setDragged(false);
            }}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.2}
                roughness={0.82}
                metalness={0.45}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#dbe7f5"
          depthTest={false}
          lineWidth={1}
          map={configuredTexture}
          repeat={[-4, 1]}
          resolution={[width, height]}
          transparent
          useMap
        />
      </mesh>
    </>
  );
}

export default function HeroLanyard() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_30%),linear-gradient(180deg,#07111b_0%,#04070d_52%,#02040a_100%)] shadow-[0_30px_120px_rgba(2,6,23,0.65)]">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_62%)]" />

      <Canvas camera={{ position: [0, 0, 11.5], fov: 22 }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[0, 6, 5]} intensity={1.75} color="#f8fbff" />
        <directionalLight position={[-3, 1, 3]} intensity={0.6} color="#7dd3fc" />
        <Physics gravity={[0, -32, 0]} timeStep={1 / 60}>
          <HeroBand />
        </Physics>
        <Environment blur={1}>
          <Lightformer
            intensity={2}
            color="#ffffff"
            position={[0, 4, 8]}
            rotation={[0, 0, 0]}
            scale={[6, 3, 1]}
          />
          <Lightformer
            intensity={1.6}
            color="#7dd3fc"
            position={[-4, 1, 4]}
            rotation={[0, Math.PI / 4, 0]}
            scale={[8, 2, 1]}
          />
          <Lightformer
            intensity={1.2}
            color="#ffffff"
            position={[4, -2, 5]}
            rotation={[0, -Math.PI / 5, 0]}
            scale={[5, 8, 1]}
          />
        </Environment>
      </Canvas>

      <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-md border border-white/10  px-4 py-3 backdrop-blur-md">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200/70">
            Hero Lanyard
          </p>
          <p className="mt-1 text-sm font-medium text-slate-100">
            Drag the badge
          </p>
        </div>
        <p className="max-w-[144px] text-right text-[11px] leading-5 text-slate-400">
          Idle sway, touch drag, and spring return.
        </p>
      </div>
    </div>
  );
}

useGLTF.preload(CARD_GLB);
