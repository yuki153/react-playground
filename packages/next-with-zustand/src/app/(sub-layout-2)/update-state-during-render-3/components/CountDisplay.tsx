"use client";

import { useCountValue } from "../store/countContext";
import { Other } from "./Other";

export function CountDisplay() {
  // read 用 context を購読する。count が変わるとここだけ再レンダリングされる。
  const count = useCountValue();
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
