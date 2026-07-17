"use client";
import { useLayoutEffect } from "react";
import { Counter } from "./components/Counter";

export default function Page() {
  console.log("render update-state-during-render/page.tsx");
  useLayoutEffect(() => {
    console.log("layout effect update-state-during-render/page.tsx");
  });
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-md p-8">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">update-state-during-render-1</h1>
        <Counter />
      </div>
    </div>
  );
}
