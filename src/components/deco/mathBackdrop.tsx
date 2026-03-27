export function MathBackdrop({
  symbols = true,
  pulse = false,
}) {
  return (
    <div
      className={`math-backdrop ${pulse ? "pulse" : ""}`}
      aria-hidden="true"
    >
      <div className="math-grid" />

      {symbols && (
        <div className="math-symbols">
          <span>∇</span>
          <span>λ</span>
          <span>∫</span>
          <span>ℝⁿ</span>
          <span>→</span>
        </div>
      )}
    </div>
  );
}

export function DotBackdrop({ pulse = false }) {
  return (
    <div
      className={`dot-backdrop ${pulse ? "pulse" : ""}`}
      aria-hidden="true"
    >
      <div className="dot-pattern" />
    </div>
  );
};

export function DiagonalBackdrop({ pulse = false }) {
  return (
    <div
      className={`diagonal-backdrop ${pulse ? "pulse" : ""}`}
      aria-hidden="true"
    >
      <div className="diagonal-lines" />
    </div>
  );
}
