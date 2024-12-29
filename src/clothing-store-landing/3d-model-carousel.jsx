'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Model = ({ color, shape }) => {
  let Geometry;
  switch (shape) {
    case 'box':
      Geometry = <boxGeometry args={[1, 1, 1]} />;
      break;
    case 'sphere':
      Geometry = <sphereGeometry args={[0.7, 32, 32]} />;
      break;
    case 'torus':
      Geometry = <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      break;
    default:
      Geometry = <boxGeometry args={[1, 1, 1]} />;
  }

  return (
    <mesh rotation={[0, Math.PI * 0.25, 0]}>
      {Geometry}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Scene = ({ color, shape }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <Model color={color} shape={shape} />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export function ThreeDModelCarousel({ initialSlide = 0 }) {
  const models = [
    { color: '#FF6B6B', shape: 'box' },
    { color: '#4ECDC4', shape: 'sphere' },
    { color: '#45B7D1', shape: 'torus' },
  ];

  return (
    <div className="h-[300px] md:h-[400px]">
      <Scene color={models[0].color} shape={models[0].shape} />
    </div>
  );
}
