export default function Archive() {
  return (
    <div>
      <h1>Archive</h1>
      <p>
        Completed cards are archived here. You can browse history and see when each card was archived
        and how it moved through columns.
      </p>
      <section
        style={{
          marginTop: "1.5rem",
          border: "1px solid #eee",
          borderRadius: "8px",
          padding: "1.5rem",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>Archived cards</h2>
        <p style={{ margin: 0, color: "#666", fontSize: "0.875rem" }}>
          No archived cards yet. Complete cards on the Board and archive them to see them here.
        </p>
      </section>
    </div>
  );
}
