"use client";
import React from "react";
import { useEffect } from "react";

export default function Modelviewer({ src }) {
  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);
  return (
    <div>
      <model-viewer
        alt="a cool globe hologram"
        src={src}
        ar
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
      ></model-viewer>
    </div>
  );
}
