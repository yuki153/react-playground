import { type DOMNode, Element, type HTMLReactParserOptions, domToReact } from "html-react-parser";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

type Args = {
  isLogin?: boolean;
};

const analyzeToReplace = (domNode: Element, args: Args) => {
  if (domNode.attribs["data-login"]) {
    if (args.isLogin === undefined) {
      throw new Error("isLogin is required");
    }
    if (domNode.attribs["data-login"] === "true") {
      return args.isLogin ? <>{domToReact(domNode.children as DOMNode[])}</> : <></>;
    }
    if (domNode.attribs["data-login"] === "false") {
      return args.isLogin === false ? <>{domToReact(domNode.children as DOMNode[])}</> : <></>;
    }
  } else if (domNode.children.length > 0) {
    domNode.children.map((child) => {
      if (child instanceof Element) {
        return analyzeToReplace(child, args);
      }
    });
  }
};

const getOptions = (args: Args): HTMLReactParserOptions => {
  return {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        return analyzeToReplace(domNode, args);
      }
    },
  };
};

export const usePageState = (): Args => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(window.localStorage.getItem("isLogin") === "true");
  }, []);

  return { isLogin };
};

type Props = {
  pageState: Args;
  html: string;
};

export const StaticPageParser = ({ pageState, html }: Props) => {
  return <div>{parse(html, getOptions(pageState))}</div>;
};
