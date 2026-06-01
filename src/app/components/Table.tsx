type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export default function Table<T extends { id: string | number }>({
  columns,
  data,
}: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm">
        {/* Header */}
        <thead>
          <tr className="border-b border-border bg-muted">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="text-left px-4 py-3 text-gray-400 font-medium"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-12 text-center text-gray-500"
              >
                No results found
              </td>
            </tr>
          )}
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b border-border last:border-0 hover:bg-muted transition-colors"
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3 text-gray-200">
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
