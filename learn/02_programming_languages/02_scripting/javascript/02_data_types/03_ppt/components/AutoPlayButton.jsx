function AutoPlayButton({ isActive, onToggle }) {
  return (
    <button
      className={`btn-icon ${isActive ? "text-blue-500" : ""}`}
      onClick={onToggle}
      title={isActive ? "Stop Auto-Play" : "Start Auto-Play"}
    >
      <i className={`fas ${isActive ? "fa-pause" : "fa-play"}`}></i>
    </button>
  );
}

window.AutoPlayButton = AutoPlayButton;
