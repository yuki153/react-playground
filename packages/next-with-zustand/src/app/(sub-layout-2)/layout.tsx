"use client";

import { StateProvider } from "./stateProvider";

export const SubLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("SubLayout render");
  return (
    <div>
      <p>SubLayout render</p>
      <StateProvider>{children}</StateProvider>
    </div>
  );
};

export default SubLayout;
