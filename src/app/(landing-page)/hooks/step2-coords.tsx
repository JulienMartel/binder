"use client";

import { atom, useAtom } from "jotai";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

export const step2CoordsAtom = atom({
  x: 0,
  y: 0,
  height: 0,
});

export default function useStep2Coords() {
  const [, set] = useAtom(step2CoordsAtom);

  const [ref, bounds] = useMeasure({ offsetSize: true });

  useEffect(() => {
    set({
      x: bounds.x + bounds.width / 2,
      y: bounds.y + bounds.height / 2,
      height: bounds.height,
    });
  }, [bounds.x, bounds.y]);

  return [ref] as const;
}
