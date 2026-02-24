export default function Stats() {
  return (
    <div>
      <h1>Stats</h1>
      <p>Column-level and board-level statistics: card counts and throughput.</p>
      <section
        style={{
          marginTop: "1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1rem",
        }}
      >
        <StatCard title="To Do" count={0} />
        <StatCard title="In Progress" count={0} />
        <StatCard title="Done" count={0} />
      </section>
      <section
        style={{
          marginTop: "1.5rem",
          border: "1px solid #eee",
          borderRadius: "8px",
          padding: "1rem",
          backgroundColor: "#fafafa",
        }}
      >
        <h2 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>Board</h2>
        <p style={{ margin: 0, fontSize: "0.875rem", color: "#666" }}>
          Total cards: <strong>0</strong> · Throughput (e.g. cards to Done per week) will appear here.
        </p>
      </section>
    </div>
  );
}

function StatCard({ title, count }: { title: string; count: number }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{count}</div>
      <div style={{ fontSize: "0.875rem", color: "#666" }}>{title}</div>
    </div>
  );
}
