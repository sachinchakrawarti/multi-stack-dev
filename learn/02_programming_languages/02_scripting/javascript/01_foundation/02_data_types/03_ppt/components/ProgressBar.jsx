function ProgressBar({ progress, color = "gradient" }) {
  const barStyle =
    color === "gradient"
      ? { background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }
      : { background: color };

  return (
    <div className="progress">
      <div
        className="progress-bar"
        style={{ ...barStyle, width: `${progress}%` }}
      ></div>
    </div>
  );
}

window.ProgressBar = ProgressBar;
