import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link href="/update-state-during-render">update-state-during-render</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
