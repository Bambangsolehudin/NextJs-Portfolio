import React, { useRef, useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Sphere } from "@react-three/drei";
import * as THREE from "three";

// 3D Model Component
function CardModel({ isDragging, dragRotation }) {
  const group = useRef(null);
  const gltf = useGLTF("/lanyard/card.glb");

  useFrame(() => {
    if (group.current) {
      if (isDragging) {
        // Smooth drag rotation
        group.current.rotation.x = dragRotation.y * 0.02;
        group.current.rotation.y = dragRotation.x * 0.02;
      } else {
        // Auto-rotate when not dragging
        group.current.rotation.y += 0.003;
      }
    }
  });

  return (
    <group ref={group}>
      <primitive object={gltf.scene} scale={2} />
    </group>
  );
}

export default function Lanyard({ type = "svg", showStats = true }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragRotation, setDragRotation] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D tilt (SVG mode)
  useEffect(() => {
    if (type === "glb") return;

    const handleMouseMove = (e) => {
      if (!containerRef.current || !isHovered) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });

      // Calculate rotation based on mouse position
      const rotationY = ((x / rect.width) - 0.5) * 20;
      const rotationX = ((y / rect.height) - 0.5) * -20;

      setRotation({ x: rotationX, y: rotationY });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setRotation({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered, type]);

  // Handle drag for GLB & Hero mode
  useEffect(() => {
    if (type === "svg") return;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      if (type === "glb") {
        setDragRotation({ x: deltaX, y: deltaY });
      } else if (type === "hero") {
        // Limit drag offset for hero mode
        const maxOffset = 30;
        setDragOffset({
          x: Math.max(-maxOffset, Math.min(maxOffset, deltaX)),
          y: Math.max(-maxOffset * 2, Math.min(maxOffset / 2, deltaY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      if (type === "hero") {
        // Smooth return to center
        setDragOffset({ x: 0, y: 0 });
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("mousedown", handleMouseDown);
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, type]);

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: isHovered ? -8 : -4,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // SVG Mode
  if (type === "svg") {
    return (
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-xs mx-auto perspective"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          className="relative w-full h-auto"
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{
            transformStyle: "preserve-3d",
            transformPerspective: "1000px",
          }}
        >
          {/* Lanyard Card Container */}
          <motion.div
            className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-2xl overflow-hidden shadow-xl"
            animate={{
              boxShadow: isHovered
                ? "0 25px 50px -12px rgba(30, 41, 59, 0.8), 0 0 40px rgba(96, 165, 250, 0.2)"
                : "0 10px 25px -5px rgba(30, 41, 59, 0.5), 0 0 20px rgba(96, 165, 250, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* SVG Lanyard Card */}
            <div className="w-full aspect-[3/4]">
              <img
                src={showStats ? "/lanyard/card.svg" : "/lanyard/card-nostats.svg"}
                alt="Bambang Solehudin - Frontend Developer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Shine Effect on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{
                opacity: isHovered ? 0.15 : 0,
                x: isHovered ? 400 : -400,
              }}
              transition={{ duration: 0.6 }}
              style={{
                pointerEvents: "none",
              }}
            />

            {/* Depth Indicator */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"
              animate={{
                opacity: isHovered ? 0.6 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Light source effect for depth */}
        {isHovered && (
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              pointerEvents: "none",
              filter: "blur(20px)",
            }}
          />
        )}
      </motion.div>
    );
  }

  // Hero Mode (Draggable Lanyard with Strap)
  if (type === "hero") {
    return (
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-sm mx-auto h-auto cursor-grab active:cursor-grabbing"
      >
        {/* SVG Lanyard */}
        <motion.div
          animate={{
            x: dragOffset.x,
            y: dragOffset.y,
            rotateZ: isDragging ? dragOffset.x * 0.5 : 0,
          }}
          transition={isDragging ? { type: "spring", stiffness: 800, damping: 100 } : { type: "spring", stiffness: 300, damping: 40 }}
          style={{
            transformOrigin: "top center",
          }}
        >
          <img
            ref={svgRef}
            src="/lanyard/lanyard-hero.svg"
            alt="Bambang Solehudin - Frontend Developer Lanyard"
            className="w-full h-auto drop-shadow-2xl"
            draggable="false"
          />
        </motion.div>

        {/* Drag Hint */}
        {!isDragging && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="text-white/30 text-xs font-medium whitespace-nowrap">
              ↑ Drag to swing ↑
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  }

  // GLB Mode (3D with Drag)
  return (
    <motion.div
      ref={containerRef}
      className="relative w-full max-w-xs mx-auto h-96 rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
      style={{
        perspective: "1000px",
      }}
    >
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, 10]} intensity={0.5} />

        <Suspense fallback={null}>
          <CardModel isDragging={isDragging} dragRotation={dragRotation} />
        </Suspense>
      </Canvas>

      {/* Drag Indicator */}
      {!isDragging && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white text-xs font-medium opacity-50">
            Drag to rotate
          </div>
        </motion.div>
      )}

      {/* Shadow/Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
    </motion.div>
  );
}
