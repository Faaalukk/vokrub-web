export default function Header({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-10 flex items-center bg-primary justify-between px-6 py-4 border-b-2 border-border">
      <div className="flex flex-col">
        <p className="text-xs text-gray-500 uppercase tracking-widest py-2 font-jetbrains">
          VOKRUB
        </p>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-700 rounded-lg text-sm hover:bg-muted">
          Export
        </button>
        <button className="p-2 border border-gray-700 rounded-lg hover:bg-muted">
          🔔
        </button>
      </div>
    </div>
  );
}
