type WordEntry = {
  word: string;
  count: number;
};

const words: WordEntry[] = [
  { word: "Serendipity", count: 1840 },
  { word: "Ephemeral", count: 1622 },
  { word: "Resilience", count: 1490 },
  { word: "Petrichor", count: 1205 },
  { word: "Eloquent", count: 1098 },
  { word: "Nuance", count: 944 },
];

const max = Math.max(...words.map((w) => w.count));

export default function MostStoredWords() {
  return (
    <div className="bg-muted rounded-2xl p-6 flex flex-col gap-4">
      <h2 className="text-lg font-bold">Most-stored words</h2>
      <div className="flex flex-col gap-4">
        {words.map((entry, index) => (
          <div key={entry.word} className="flex flex-col gap-1">
            {/* Label row */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">
                {index + 1}. {entry.word}
              </span>
              <span className="text-gray-500">
                {entry.count.toLocaleString()}
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-1 w-full bg-gray-800 rounded-full">
              <div
                className="h-1 bg-accent rounded-full"
                style={{ width: `${(entry.count / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
