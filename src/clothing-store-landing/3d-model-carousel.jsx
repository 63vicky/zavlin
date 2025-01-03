'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Model } from './ClothingStoreLanding';

// const Model = ({ color, shape }) => {
//   let Geometry;
//   switch (shape) {
//     case 'box':
//       Geometry = <boxGeometry args={[1, 1, 1]} />;
//       break;
//     case 'sphere':
//       Geometry = <sphereGeometry args={[0.7, 32, 32]} />;
//       break;
//     case 'torus':
//       Geometry = <torusGeometry args={[0.5, 0.2, 16, 100]} />;
//       break;
//     default:
//       Geometry = <boxGeometry args={[1, 1, 1]} />;
//   }

//   return (
//     <mesh rotation={[0, Math.PI * 0.25, 0]}>
//       {Geometry}
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// };

const Scene = ({ color, shape }) => {
  return (
    <Canvas shadows>
      <ambientLight intensity={1} />
      <directionalLight
        position={[10, -20, 10]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={5}
        shadow-camera-left={10}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={10}
      />
      <pointLight />
      <Suspense fallback={null}>
        {/* <Model color={color} shape={shape} /> */}
        <Model
          rotation={[0, Math.PI / 2, 0]}
          position={[0, -3, 0]}
          castShadow
          receiveShadow
        />
        {/* Ground Plane */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[10, -30, 10]}
          receiveShadow
        >
          <planeGeometry args={[6, 10]} /> {/* Size of the plane */}
          <meshStandardMaterial color="gray" />
        </mesh>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableDamping={true}
          enableRotate={true}
        />
      </Suspense>
    </Canvas>
  );
};

export function ThreeDModelCarousel({ initialSlide = 0 }) {
  return (
    <div className="h-[400px] md:h-[500px]">
      <Scene />
    </div>
  );
}
