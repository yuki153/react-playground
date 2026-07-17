import Link from "next/link";

export default function Home() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h1 className="text-xl font-bold text-gray-900">Home (sub-layout-home-2)</h1>
      <nav className="mt-4">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="/update-state-during-render-3"
              className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-900"
            >
              update-state-during-render-3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
