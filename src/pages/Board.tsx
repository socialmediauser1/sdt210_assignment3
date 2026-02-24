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
        <ColumnPlaceholder title="To Do" wipLimit={4} />
        <ColumnPlaceholder title="In Progress" wipLimit={2} />
        <ColumnPlaceholder title="Done" wipLimit={null} />
      </section>
    </div>
  );
}

function ColumnPlaceholder({
  title,
  wipLimit,
}: {
  title: string;
  wipLimit: number | null;
}) {
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
          <span style={{ fontSize: "0.875rem", color: "#666" }}>WIP: 0 / {wipLimit}</span>
        )}
      </div>
      <p style={{ margin: 0, fontSize: "0.875rem", color: "#888" }}>Drop cards here</p>
    </div>
  );
}
