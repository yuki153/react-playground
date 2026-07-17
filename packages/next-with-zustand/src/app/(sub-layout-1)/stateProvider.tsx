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
      <p>StateProvider render {pathname}</p>
      {children}
    </CountStoreContext>
  );
};
