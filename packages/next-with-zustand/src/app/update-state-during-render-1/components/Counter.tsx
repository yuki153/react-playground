"use client";

import { CountControls } from "./CountControls";
import { CountDisplay } from "./CountDisplay";

export function Counter() {
  console.log("Counter render");
  return (
    <div className="rounded-xl border border-gray-300 bg-gray-50 p-5">
      <p className="text-sm font-medium text-gray-600">Counter (state を持たない)</p>
      <div className="mt-4 flex flex-col gap-4">
        <CountDisplay />
        <CountControls />
      </div>
    </div>
  );
}
