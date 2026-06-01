export default function Header({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          VOKRUB
        </p>
        <h1 className="text-2xl fond-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-700 rounded-lg text-sm hover:bg-muted">
          ≡ Export
        </button>
        <button className="p-2 border border-gray-700 rounded-lg hover:bg-muted">
          🔔
        </button>
      </div>
    </div>
  );
}
