"use client";

import { useCountStore } from "../store/countStore";

export function CountControls() {
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const reset = useCountStore((state) => state.reset);
  console.log("CountControls render (update-state-during-render)");

  // update-state-during-render の例として、レンダリング中に state を更新する
  // これは React のルールに反するため、通常は避けるべきです。
  // ここではあくまで例として示しています。
  increment();

  return (
    <div className="rounded-lg border border-green-300 bg-green-50 p-4">
      <span className="inline-block rounded bg-green-600 px-2 py-0.5 text-xs font-bold text-white">
        CountControls (write)
      </span>
      <div className="mt-3 flex gap-2">
        <button
          onClick={increment}
          className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
        >
          +1
        </button>
        <button
          onClick={decrement}
          className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
        >
          -1
        </button>
        <button
          onClick={reset}
          className="rounded-md border border-green-600 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-100"
        >
          reset
        </button>
      </div>
    </div>
  );
}
