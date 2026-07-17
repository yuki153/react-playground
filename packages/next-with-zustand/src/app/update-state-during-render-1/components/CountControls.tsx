"use client";

import { useCountStore } from "../store/useCountStore";

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
      <p className="text-sm font-medium text-green-700">CountControls (count を更新)</p>
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
