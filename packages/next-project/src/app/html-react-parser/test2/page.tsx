import parse from "html-react-parser";
import { reactElement } from "static-html/test1";

const Page = () => {
  console.log("test2/page.tsx");
  return <div>{parse(reactElement)}</div>;
};

export default Page;
