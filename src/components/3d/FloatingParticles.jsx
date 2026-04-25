import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ParticlesCore() {
  const ref = useRef();
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const particlesCount = 800;

  useEffect(() => {
    if (!ref.current) return;

    // Create particle positions in a sphere shape
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particlesCount);
      const theta = Math.sqrt(particlesCount * Math.PI) * phi;
      
      const x = Math.cos(theta) * Math.sin(phi) * 500;
      const y = Math.sin(theta) * Math.sin(phi) * 500;
      const z = Math.cos(phi) * 500;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Color gradient
      colors[i * 3] = 0.3 + (i / particlesCount) * 0.7;
      colors[i * 3 + 1] = 0.5 + (i / particlesCount) * 0.3;
      colors[i * 3 + 2] = 0.8;
    }
    
    ref.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    ref.current.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );
  }, []);

  useFrame(() => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.x += 0.0001;
      ref.current.rotation.y += 0.0002 + mouseX.current * 0.00005;
      ref.current.rotation.z += mouseY.current * 0.00003;
    }
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX - window.innerWidth / 2;
      mouseY.current = e.clientY - window.innerHeight / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Points ref={ref} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={30}
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function FloatingParticles() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 800], fov: 60 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ParticlesCore />
      </Canvas>
    </div>
  );
}
