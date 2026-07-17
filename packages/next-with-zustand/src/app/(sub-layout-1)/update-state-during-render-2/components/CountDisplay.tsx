"use client";

import { useCountStore } from "../store/countStore";
import { Other } from "./Other";

export function CountDisplay() {
  const { count } = useCountStore((state) => ({ count: state.count }));
  console.log("CountDisplay render", count);

  return (
    <div>
      <div className="rounded-lg border border-blue-300 bg-blue-50 p-4">
        <span className="inline-block rounded bg-blue-500 px-2 py-0.5 text-xs font-bold text-white">
          CountDisplay (read)
        </span>
        <p className="mt-2 text-3xl font-bold tabular-nums text-blue-900">{count}</p>
      </div>
      <Other className="mt-4" />
    </div>
  );
}
