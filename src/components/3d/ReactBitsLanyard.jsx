/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
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

const cardGLB = "/lanyard/card.glb";
const lanyardTexture = "/lanyard/lanyard.png";

extend({ MeshLineGeometry, MeshLineMaterial });

function Band({ maxSpeed = 42, minSpeed = 8 }) {
  const band = useRef(null);
  const fixed = useRef(null);
  const jointA = useRef(null);
  const jointB = useRef(null);
  const jointC = useRef(null);
  const card = useRef(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyardTexture);
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, setDragged] = useState(false);
  const [hovered, setHovered] = useState(false);

  useRopeJoint(fixed, jointA, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(jointA, jointB, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(jointB, jointC, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(jointC, card, [[0, 0, 0], [0, 1.45, 0]]);

  useEffect(() => {
    if (!hovered) return undefined;

    document.body.style.cursor =
      dragged && typeof dragged !== "boolean" ? "grabbing" : "grab";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [dragged, hovered]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, jointA, jointB, jointC, fixed].forEach((ref) => {
        ref.current?.wakeUp();
      });

      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (!fixed.current || !jointA.current || !jointB.current || !jointC.current || !card.current) {
      return;
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
    band.current.geometry.setPoints(curve.getPoints(32));

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.22, z: ang.z });
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4.1, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody ref={jointA} {...segmentProps} position={[0.55, 0, 0]}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody ref={jointB} {...segmentProps} position={[1.1, 0, 0]}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody ref={jointC} {...segmentProps} position={[1.7, 0, 0]}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          ref={card}
          {...segmentProps}
          position={[2.2, 0, 0]}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.18}
            position={[0, -1.2, -0.05]}
            onPointerDown={(event) => {
              event.target.setPointerCapture(event.pointerId);
              setDragged(
                new THREE.Vector3()
                  .copy(event.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
            onPointerUp={(event) => {
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
                clearcoatRoughness={0.15}
                roughness={0.88}
                metalness={0.7}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.32}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#ffffff"
          depthTest={false}
          lineWidth={1}
          map={texture}
          repeat={[-4, 1]}
          resolution={[width, height]}
          transparent
          useMap
        />
      </mesh>
    </>
  );
}

export default function ReactBitsLanyard() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(236,245,248,0.88))] shadow-[0_24px_90px_rgba(15,23,42,0.08)] dark:border-slate-800/80 dark:bg-[linear-gradient(180deg,rgba(8,16,29,0.94),rgba(10,24,39,0.92))]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(141,213,205,0.35),transparent_70%)] dark:bg-[radial-gradient(circle_at_top,rgba(125,211,199,0.18),transparent_70%)]" />

      <div className="relative h-[280px] w-full sm:h-[340px]">
        <Canvas camera={{ position: [0, 0, 22], fov: 22 }} dpr={[1, 1.6]}>
          <ambientLight intensity={Math.PI * 0.55} />
          <Physics gravity={[0, -38, 0]} timeStep={1 / 60}>
            <Band />
          </Physics>
          <Environment blur={0.9}>
            <Lightformer
              intensity={1.5}
              color="#ffffff"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.2, 1]}
            />
            <Lightformer
              intensity={2}
              color="#dbeafe"
              position={[-1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.15, 1]}
            />
            <Lightformer
              intensity={5}
              color="#ffffff"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Canvas>
      </div>

      <div className="border-t border-white/60 bg-white/72 px-5 py-4 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/45">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-700/80 dark:text-teal-300/80">
              React Bits Lanyard
            </p>
            <h3 className="mt-1 text-base font-semibold text-slate-950 dark:text-white">
              Interactive identity badge using local 3D assets
            </h3>
          </div>
          <p className="max-w-[220px] text-xs leading-5 text-slate-500 dark:text-slate-400">
            Drag the badge gently. The rope and card are rendered from
            `/public/lanyard` for a responsive profile detail.
          </p>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload(cardGLB);
