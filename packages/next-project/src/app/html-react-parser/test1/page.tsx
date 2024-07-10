import parse from "html-react-parser";
import { reactElement } from "static-html/test1";

const Page = () => {
  return <div>{parse(reactElement)}</div>;
};

export default Page;
