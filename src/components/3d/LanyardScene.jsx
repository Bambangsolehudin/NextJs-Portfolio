import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

function LanyardModel() {
  const { scene } = useGLTF("/lanyard/card.glb");

  return (
    <Float speed={1.3} rotationIntensity={0.24} floatIntensity={0.28}>
      <Center scale={1.5}>
        <primitive object={scene} />
      </Center>
    </Float>
  );
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
        Loading lanyard
      </div>
    </Html>
  );
}

export default function LanyardScene() {
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-[28px] border border-white/60 bg-[radial-gradient(circle_at_top,rgba(186,230,253,0.45),rgba(255,255,255,0.86)_52%,rgba(240,249,255,0.9)_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.08)] dark:border-slate-800/80 dark:bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.28),rgba(7,17,31,0.96)_52%,rgba(2,6,23,0.98)_100%)] sm:h-[320px]">
      <Canvas camera={{ position: [0, 0.4, 4.7], fov: 28 }} dpr={[1, 1.75]}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 4]} intensity={1.8} />
        <directionalLight position={[-3, -2, 2]} intensity={0.6} color="#b6e6fb" />
        <Suspense fallback={<LoadingFallback />}>
          <LanyardModel />
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.22}
          scale={6}
          blur={2.4}
          far={3.5}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.25}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 1.85}
        />
      </Canvas>

      <div className="pointer-events-none absolute inset-x-5 bottom-4 flex items-center justify-between rounded-2xl border border-white/60 bg-white/72 px-4 py-3 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-950/55">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700/80 dark:text-teal-300/80">
            React Bits Style
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
            Interactive 3D Lanyard
          </p>
        </div>
        <p className="max-w-[150px] text-right text-[11px] leading-5 text-slate-500 dark:text-slate-400">
          Responsive WebGL card using local `/public/lanyard` assets
        </p>
      </div>
    </div>
  );
}

useGLTF.preload("/lanyard/card.glb");
