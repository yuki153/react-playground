"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { type CountStore, CountStoreContext, createCountStore } from "./update-state-during-render-2/store/countStore";

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // レンダリング間で同一 store インスタンスを保持する。
  const storeRef = useRef<CountStore | null>(null);
  if (!storeRef.current) {
    console.log("StateProvider create store");
    storeRef.current = createCountStore();
  }

  console.log("StateProvider render", pathname);
  return (
    <CountStoreContext value={storeRef.current}>
      <section className="rounded-xl border-2 border-indigo-400 bg-indigo-50 p-4">
        <span className="inline-block rounded bg-indigo-500 px-2 py-0.5 text-xs font-bold text-white">
          StateProvider (zustand store)
        </span>
        <p className="mt-1 text-xs text-indigo-700">{pathname}</p>
        <div className="mt-3">{children}</div>
      </section>
    </CountStoreContext>
  );
};
