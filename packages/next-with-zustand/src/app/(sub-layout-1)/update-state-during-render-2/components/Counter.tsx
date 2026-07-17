"use client";

import { CountControls } from "./CountControls";
import { CountDisplay } from "./CountDisplay";

export function Counter() {
  console.log("Counter render");
  return (
    <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
      <span className="inline-block rounded bg-gray-500 px-2 py-0.5 text-xs font-bold text-white">
        Counter (state なし)
      </span>
      <div className="mt-4 flex flex-col gap-4">
        <CountDisplay />
        <CountControls />
      </div>
    </div>
  );
}
