"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {
  type CountActions,
  CountActionsContext,
  CountValueContext,
} from "./update-state-during-render-3/store/countContext";

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // zustand の外部ストアではなく、React 純正の useState で count を保持する。
  const [count, setCount] = useState(0);

  // 更新関数は count に依存しない（setState の関数形式を使う）ため、
  // useMemo で一度だけ生成して参照を固定する。これにより write context の
  // 値が変わらず、setter だけを使うコンポーネントは再レンダリングされない。
  const actions = useMemo<CountActions>(
    () => ({
      increment: () => setCount((c) => c + 1),
      decrement: () => setCount((c) => c - 1),
      reset: () => setCount(0),
    }),
    []
  );

  console.log("StateProvider render", pathname, count);
  return (
    <CountActionsContext value={actions}>
      <CountValueContext value={count}>
        <section className="rounded-xl border-2 border-indigo-400 bg-indigo-50 p-4">
          <span className="inline-block rounded bg-indigo-500 px-2 py-0.5 text-xs font-bold text-white">
            StateProvider (count: {count})
          </span>
          <p className="mt-1 text-xs text-indigo-700">{pathname}</p>
          <div className="mt-3">{children}</div>
        </section>
      </CountValueContext>
    </CountActionsContext>
  );
};
