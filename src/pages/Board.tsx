import type { Card } from "../types";

const sampleCards: Card[] = [
  {
    id: "card-1",
    title: "Fix login bug",
    description: "Users sometimes stay stuck on the loading spinner after login.",
    category: "bug",
    columnId: "column-todo",
    assignee: "Alice",
    priority: "high",
    createdAt: "2026-02-24T09:00:00.000Z",
    columnEnteredAt: "2026-02-24T09:00:00.000Z",
    moves: [],
  },
  {
    id: "card-2",
    title: "Add WIP limit warning",
    description: "Highlight columns that exceed their WIP limit.",
    category: "feature",
    columnId: "column-in-progress",
    assignee: "Bob",
    priority: "medium",
    createdAt: "2026-02-23T14:30:00.000Z",
    columnEnteredAt: "2026-02-24T08:15:00.000Z",
    moves: [
      {
        at: "2026-02-24T08:15:00.000Z",
        fromColumnId: "column-todo",
        toColumnId: "column-in-progress",
      },
    ],
  },
];

const columns = [
  { id: "column-todo", title: "To Do", wipLimit: 4 },
  { id: "column-in-progress", title: "In Progress", wipLimit: 2 },
  { id: "column-done", title: "Done", wipLimit: null as number | null },
];

export default function Board() {
  return (
    <div>
      <h1>Board</h1>
      <p>Drag cards between columns. Use the menu on each card to edit, move, or archive.</p>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            wipLimit={column.wipLimit}
            cards={sampleCards.filter((card) => card.columnId === column.id)}
          />
        ))}
      </section>
    </div>
  );
}

function Column({
  title,
  wipLimit,
  cards,
}: {
  title: string;
  wipLimit: number | null;
  cards: Card[];
}) {
  const count = cards.length;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        minHeight: "200px",
        backgroundColor: "#fafafa",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
        <strong>{title}</strong>
        {wipLimit !== null && (
          <span style={{ fontSize: "0.875rem", color: "#666" }}>
            WIP: {count} / {wipLimit}
          </span>
        )}
      </div>
      {cards.length === 0 ? (
        <p style={{ margin: 0, fontSize: "0.875rem", color: "#888" }}>Drop cards here</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {cards.map((card) => (
            <li
              key={card.id}
              style={{
                borderRadius: "6px",
                padding: "0.5rem 0.75rem",
                backgroundColor: "#fff",
                boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                fontSize: "0.9rem",
              }}
            >
              <div style={{ fontWeight: 500 }}>{card.title}</div>
              <div style={{ fontSize: "0.8rem", color: "#666" }}>{card.category}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
