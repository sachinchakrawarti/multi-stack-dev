function SettingsPanel({
  isOpen,
  onClose,
  theme,
  onThemeChange,
  fontSize,
  onFontSizeChange,
  autoPlay,
  onAutoPlayToggle,
}) {
  if (!isOpen) return null;

  return (
    <div className="settings-panel active">
      <h3>
        <i className="fas fa-cog text-blue-500"></i>
        Settings
      </h3>

      <div className="settings-group">
        <label>Theme</label>
        <select value={theme} onChange={(e) => onThemeChange(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
      </div>

      <div className="settings-group">
        <label>Font Size: {fontSize}px</label>
        <input
          type="range"
          min="14"
          max="24"
          value={fontSize}
          onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
        />
      </div>

      <div className="settings-group">
        <label>Auto-Play</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className={`btn ${autoPlay ? "bg-blue-500 text-white" : "bg-gray-100"}`}
            onClick={onAutoPlayToggle}
            style={{ flex: 1 }}
          >
            {autoPlay ? "Stop" : "Start"}
          </button>
        </div>
      </div>

      <button className="btn-close-help" onClick={onClose}>
        Close Settings
      </button>
    </div>
  );
}

window.SettingsPanel = SettingsPanel;
