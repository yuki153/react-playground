"use client";
import { useLayoutEffect } from "react";
import { Counter } from "./components/Counter";

export default function Page() {
  console.log("render update-state-during-render-3/page.tsx");
  useLayoutEffect(() => {
    console.log("layout effect update-state-during-render-3/page.tsx");
  });
  return (
    <div className="mx-auto max-w-md p-8">
      <h1 className="mb-6 text-2xl font-bold">update-state-during-render-3 (useState + context)</h1>
      <Counter />
    </div>
  );
}
