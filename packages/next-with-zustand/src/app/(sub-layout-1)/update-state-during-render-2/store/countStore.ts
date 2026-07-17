"use client";

import { createContext, use } from "react";
import { createStore } from "zustand";
import { useStoreWithEqualityFn } from "zustand/traditional";

export type CountState = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// グローバル singleton ではなく、呼び出しごとに独立した store を生成するファクトリ。
// これにより store の参照範囲を context の配下に限定できる。
export const createCountStore = () =>
  createStore<CountState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
  }));

export type CountStore = ReturnType<typeof createCountStore>;

export const CountStoreContext = createContext<CountStore | null>(null);

// context に provide された store から state を読み取る hook。
// Provider（StateProvider）配下でのみ利用できる。
export const useCountStore = <T>(selector: (state: CountState) => T): T => {
  const store = use(CountStoreContext);
  if (!store) {
    throw new Error("useCountStore は StateProvider の配下で利用してください");
  }
  // 実際のプロダクトでは useStoreWithEqualityFn を使っているため useStore の代わりに useStoreWithEqualityFn を使用する。
  return useStoreWithEqualityFn(store, selector, undefined);
};
