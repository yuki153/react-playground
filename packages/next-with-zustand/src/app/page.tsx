import Link from "next/link";

type Item = {
  href: string;
  label: string;
  description: string;
};

type Group = {
  accent: string; // Tailwind border/​text 色のベース
  title: string;
  subtitle: string;
  items: Item[];
};

const groups: Group[] = [
  {
    accent: "rose",
    title: "グローバル zustand",
    subtitle: "モジュールレベルの singleton store",
    items: [
      {
        href: "/update-state-during-render-1",
        label: "update-state-during-render-1",
        description: "レンダリング中に外部ストアを更新する",
      },
    ],
  },
  {
    accent: "indigo",
    title: "zustand + context",
    subtitle: "sub-layout-home-1 配下 / store を context でスコープ",
    items: [
      {
        href: "/sub-layout-home-1",
        label: "sub-layout-home-1",
        description: "SubLayout / StateProvider のホーム",
      },
      {
        href: "/update-state-during-render-2",
        label: "update-state-during-render-2",
        description: "context 経由の zustand store をレンダリング中に更新",
      },
    ],
  },
  {
    accent: "emerald",
    title: "useState + context",
    subtitle: "sub-layout-home-2 配下 / read・write context を分割",
    items: [
      {
        href: "/sub-layout-home-2",
        label: "sub-layout-home-2",
        description: "SubLayout / StateProvider のホーム",
      },
      {
        href: "/update-state-during-render-3",
        label: "update-state-during-render-3",
        description: "React 純正 state をレンダリング中に更新",
      },
    ],
  },
];

// Tailwind の JIT が拾えるよう、動的に組み立てず class 文字列を静的に持つ。
const accentClass: Record<string, { bar: string; badge: string; link: string }> = {
  rose: {
    bar: "bg-rose-500",
    badge: "bg-rose-100 text-rose-700",
    link: "text-rose-700 hover:bg-rose-50",
  },
  indigo: {
    bar: "bg-indigo-500",
    badge: "bg-indigo-100 text-indigo-700",
    link: "text-indigo-700 hover:bg-indigo-50",
  },
  emerald: {
    bar: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    link: "text-emerald-700 hover:bg-emerald-50",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">update-state-during-render playground</h1>
          <p className="mt-2 text-sm text-gray-500">
            レンダリング中の状態更新が、状態管理の実装によってどう振る舞いが変わるかを比較する。
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {groups.map((group) => {
            const accent = accentClass[group.accent];
            return (
              <section
                key={group.title}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <div className="flex items-stretch">
                  <div className={`w-1.5 shrink-0 ${accent.bar}`} />
                  <div className="flex-1 p-5">
                    <div className="mb-4">
                      <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold ${accent.badge}`}>
                        {group.title}
                      </span>
                      <p className="mt-1.5 text-xs text-gray-500">{group.subtitle}</p>
                    </div>
                    <ul className="flex flex-col gap-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`flex flex-col rounded-md px-3 py-2 transition-colors ${accent.link}`}
                          >
                            <span className="font-medium">{item.label}</span>
                            <span className="text-xs text-gray-500">{item.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
