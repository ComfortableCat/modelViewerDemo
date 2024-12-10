import Modelviewer from "@/components/modelviewer";
import React, { Suspense } from "react";

export default function MainPage() {
  return (
    <div className="bg-stone-500 p-10 border-2 border-red-800 rounded-2xl w-1/4 mx-auto my-10">
      <Suspense fallback={<p>This is a fallback</p>}>
        <Modelviewer src="/earth_globe_hologram_glb.glb" />
      </Suspense>
    </div>
  );
}
