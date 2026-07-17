"use client";

import { createContext, use } from "react";

export type CountActions = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// read（値）と write（更新関数）で context を分割する。
// - 値が変わると再レンダリングされてほしいのは値を参照するコンポーネントだけ。
// - 更新関数は不変なので、write context の値を安定させておけば
//   setter だけを使うコンポーネントは count 更新時に再レンダリングされない。

// read 用: count の値だけを配る。0 と「未提供(null)」を区別するため初期値は null。
export const CountValueContext = createContext<number | null>(null);

// write 用: 更新関数だけを配る。Provider 側で値を安定させる（useMemo）。
export const CountActionsContext = createContext<CountActions | null>(null);

export const useCountValue = (): number => {
  const value = use(CountValueContext);
  if (value === null) {
    throw new Error("useCountValue は StateProvider の配下で利用してください");
  }
  return value;
};

export const useCountActions = (): CountActions => {
  const actions = use(CountActionsContext);
  if (!actions) {
    throw new Error("useCountActions は StateProvider の配下で利用してください");
  }
  return actions;
};
