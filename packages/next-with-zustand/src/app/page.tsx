import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link href="/update-state-during-render-1">update-state-during-render-1</Link>
          </li>
          <li>
            <Link href="/sub-layout-home-1">sub-layout-home-1</Link>
            <ul>
              <li>
                <Link href="/update-state-during-render-2">update-state-during-render-2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/sub-layout-home-2">sub-layout-home-2</Link>
            <ul>
              <li>
                <Link href="/update-state-during-render-3">update-state-during-render-3</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
