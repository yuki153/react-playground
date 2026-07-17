"use client";

import { useCountActions } from "../store/countContext";

export function CountControls() {
  // write 用 context のみを購読する。actions は Provider 側で参照が固定
  // されているため、count が更新されてもこのコンポーネントは再レンダリングされない。
  const { increment, decrement, reset } = useCountActions();
  console.log("CountControls render (update-state-during-render-3)");

  // レンダリング中に state を更新する（sub-layout-1 の zustand 版と同じ操作）。
  // increment の実体は親（StateProvider）の setState なので、
  // 「別コンポーネントのレンダリング中に他コンポーネントを更新する」ことになり、
  // React は "Cannot update a component (StateProvider) while rendering a
  // different component (CountControls)" を警告する。
  // ただし read/write を分割したことで CountControls 自身は count 更新で
  // 再レンダリングされないため、zustand 版と同様に無限ループにはなりにくい。
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
