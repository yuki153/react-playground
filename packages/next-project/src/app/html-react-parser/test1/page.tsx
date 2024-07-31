import parse from "html-react-parser";
import { reactElement } from "static-html/test1";

const Page = () => {
  console.log("test1/page.tsx - test1");
  return <div>{parse(reactElement)}</div>;
};

export default Page;
