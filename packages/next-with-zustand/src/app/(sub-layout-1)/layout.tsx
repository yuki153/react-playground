"use client";

import { StateProvider } from "./stateProvider";

export const SubLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("SubLayout render");
  return (
    <section className="rounded-xl border-2 border-slate-400 bg-slate-100 p-4">
      <span className="inline-block rounded bg-slate-500 px-2 py-0.5 text-xs font-bold text-white">
        SubLayout (layout.tsx)
      </span>
      <div className="mt-3">
        <StateProvider>{children}</StateProvider>
      </div>
    </section>
  );
};

export default SubLayout;
