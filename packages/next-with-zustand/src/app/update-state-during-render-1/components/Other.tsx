// レンダリングに時間がかかるようにする同期ブロック処理。
// 指定時間だけ CPU をビジーウェイトさせて描画を遅延させる。
const blockFor = (ms: number) => {
  const start = performance.now();
  while (performance.now() - start < ms) {
    // busy-wait（意図的にメインスレッドを占有してレンダリングを遅延させる）
  }
};

export const Other = ({ className }: { className?: string }) => {
  blockFor(3000);
  console.log("Other render");
  return (
    <div className={`rounded-xl border border-gray-300 bg-gray-50 p-5 ${className ?? ""}`}>
      <p className="text-sm font-medium text-gray-600">Other (レンダリングに 3000ms かかる)</p>
    </div>
  );
};
