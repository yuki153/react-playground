import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link href="/update-state-during-render-3">update-state-during-render-3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
