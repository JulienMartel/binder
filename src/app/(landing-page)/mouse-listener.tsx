"use client";

import { useEffect } from "react";
import { atom, useAtom } from "jotai";

export const mouseCoordsAtom = atom({ x: 0, y: 0 });

export default function MouseListener() {
  const [, setMouseCoords] = useAtom(mouseCoordsAtom);

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      setMouseCoords({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, [setMouseCoords]);

  return <></>;
}
