import { Counter } from "./components/Counter";

export default function Page() {
  return (
    <div className="mx-auto max-w-md p-8">
      <h1 className="mb-6 text-2xl font-bold">update-state-during-render</h1>
      <Counter />
    </div>
  );
}
