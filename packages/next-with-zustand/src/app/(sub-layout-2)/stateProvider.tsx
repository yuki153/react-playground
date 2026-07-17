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
        <p>
          StateProvider render {pathname} / count: {count}
        </p>
        {children}
      </CountValueContext>
    </CountActionsContext>
  );
};
