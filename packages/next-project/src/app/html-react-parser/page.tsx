import Link from "next/link";

const Page = () => {
  console.log("test3/page.tsx");
  return (
    <div>
      <h1>Document Root</h1>
      <p>page links</p>
      <ul>
        <li>
          <Link href="/html-react-parser/test1">test1</Link>
        </li>
        <li>
          <Link href="/html-react-parser/test2">test2</Link>
        </li>
        <li>
          <Link href="/html-react-parser/test-login">test-login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
