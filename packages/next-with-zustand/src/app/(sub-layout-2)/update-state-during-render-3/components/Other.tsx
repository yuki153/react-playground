// レンダリングに時間がかかるようにする同期ブロック処理。
// 指定時間だけ CPU をビジーウェイトさせて描画を遅延させる。
const blockFor = (ms: number) => {
  const start = performance.now();
  while (performance.now() - start < ms) {
    // busy-wait（意図的にメインスレッドを占有してレンダリングを遅延させる）
  }
};

export const Other = ({ className }: { className?: string }) => {
  blockFor(200);
  console.log("Other render");
  return (
    <div className={`rounded-lg border border-amber-300 bg-amber-50 p-4 ${className ?? ""}`}>
      <span className="inline-block rounded bg-amber-500 px-2 py-0.5 text-xs font-bold text-white">
        Other (render 200ms)
      </span>
    </div>
  );
};
