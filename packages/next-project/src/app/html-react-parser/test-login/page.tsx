"use client";
import { reactElement } from "static-html/test-login";
import { StaticPageParser, usePageState } from "../../../features/static-page-parser";

const Page = () => {
  const state = usePageState();
  return <StaticPageParser html={reactElement} pageState={state} />;
};

export default Page;
