"use client";

import { useCountStore } from "../store/countStore";
import { Other } from "./Other";

export function CountDisplay() {
  const { count } = useCountStore((state) => ({ count: state.count }));
  console.log("CountDisplay render", count);

  return (
    <div>
      <div className="rounded-lg border border-blue-300 bg-blue-50 p-4">
        <p className="text-sm font-medium text-blue-700">CountDisplay (count を参照)</p>
        <p className="mt-2 text-3xl font-bold tabular-nums text-blue-900">{count}</p>
      </div>
      <Other className="mt-4" />
    </div>
  );
}
