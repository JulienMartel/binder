"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";
import { motion as motion3d } from "framer-motion-3d";
import useMeasure from "react-use-measure";

import { useAtom } from "jotai";

import { mouseCoordsAtom } from "./mouse-listener";
import { step2CoordsAtom } from "./hooks/step2-coords";
import { step3CoordsAtom } from "./hooks/step3-coords";
import { Suspense, useEffect, useState } from "react";

export default function Book() {
  const [ref, canvasBounds] = useMeasure({ offsetSize: true });
  const { scrollY } = useScroll();

  const [mouseCoords] = useAtom(mouseCoordsAtom);

  const [step2Coords] = useAtom(step2CoordsAtom);
  const [step3Coords] = useAtom(step3CoordsAtom);

  const [screenHeight, setScreenHeight] = useState(0);
  useEffect(() => {
    setScreenHeight(window?.screen.height);
  }, [setScreenHeight]);

  const stepPoints = [
    screenHeight * 0.1,
    screenHeight * 0.3,
    screenHeight * 0.8,
    screenHeight * 1,
  ];

  useEffect;

  const x = useSpring(
    useTransform(scrollY, stepPoints, [
      0,
      step2Coords.x - canvasBounds.x - canvasBounds.width / 2,
      step2Coords.x - canvasBounds.x - canvasBounds.height / 2,
      step3Coords.x - canvasBounds.x - canvasBounds.height / 2,
    ]),
    { damping: 10 }
  );
  const y = useSpring(
    useTransform(scrollY, stepPoints, [
      0,
      step2Coords.y - canvasBounds.y - canvasBounds.height / 2,
      step2Coords.y - canvasBounds.y - canvasBounds.height / 2,
      step3Coords.y - canvasBounds.y - canvasBounds.height / 2,
    ]),
    { damping: 10 }
  );

  const centerX = canvasBounds.x + x.get() + canvasBounds.width / 2;
  const centerY = canvasBounds.y + y.get() + canvasBounds.height / 2;

  const deltaXStep1 = useMotionValue(mouseCoords.x - centerX);
  const deltaYStep1 = useMotionValue(mouseCoords.y - centerY);

  deltaXStep1.set(mouseCoords.x - centerX);
  deltaYStep1.set(mouseCoords.y - centerY);

  const rotateX = useSpring(
    useTransform(deltaXStep1, [-500, 500], [-0.7, 0.7])
  );
  const rotateY = useSpring(
    useTransform(deltaYStep1, [-500, 500], [-0.7, 0.7])
  );

  const scale = useSpring(useTransform(scrollY, stepPoints, [1, 0.6, 0.6, 1]));

  return (
    <motion.div
      className="mx-auto h-[500px] w-[500px]"
      style={{ x, y }}
      ref={ref}
    >
      <Canvas className="h-full w-full">
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 0.8]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <group position={[0, 0, 0]}>
            <motion3d.group scale={scale} rotation={[rotateY, rotateX, 0]}>
              <Model />
            </motion3d.group>
          </group>
        </Suspense>
      </Canvas>
    </motion.div>
  );
}

function Model() {
  const { scene } = useGLTF("/book2.gltf", true);
  return (
    <motion3d.mesh whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
      <primitive object={scene} />
    </motion3d.mesh>
  );
}

useGLTF.preload("/book2.gltf");
