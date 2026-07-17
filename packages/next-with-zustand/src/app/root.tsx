"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  console.log("RootLayout render 1", pathname);
  useEffect(() => {
    console.log("RootLayout mounted");
  });
  return <div>{children}</div>;
};
