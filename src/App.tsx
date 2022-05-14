// Document: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction#can-it-keep-up-with-frequent-updates-to-three.js?

import * as THREE from "three";
import * as React from "react";
import { Canvas } from "@react-three/fiber";

import Box from "./components/box";
import Sphere from "./components/dodecahedronGeometry";

// const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

export default function App() {
  // const { camera, gl } = useThree();
  //   useThree(({ camera }) => {
  //     camera.rotation.set(deg2rad(30), 0, 0);
  //   });

  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Sphere position={[-1.2, -2, 0]} />
      </Canvas>
    </div>
  );
}
