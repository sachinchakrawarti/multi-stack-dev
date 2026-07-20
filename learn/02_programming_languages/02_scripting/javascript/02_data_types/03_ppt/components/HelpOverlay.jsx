function HelpOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="help-overlay" onClick={onClose}>
      <div className="help-content" onClick={(e) => e.stopPropagation()}>
        <h2>
          <i className="fas fa-keyboard"></i>
          Keyboard Shortcuts
        </h2>
        <ul>
          <li>
            <kbd>→</kbd> <kbd>PageDown</kbd> <kbd>Space</kbd> Next slide
          </li>
          <li>
            <kbd>←</kbd> <kbd>PageUp</kbd> Previous slide
          </li>
          <li>
            <kbd>Home</kbd> First slide
          </li>
          <li>
            <kbd>End</kbd> Last slide
          </li>
          <li>
            <kbd>F</kbd> <kbd>F11</kbd> Toggle fullscreen
          </li>
          <li>
            <kbd>H</kbd> <kbd>?</kbd> Toggle help
          </li>
        </ul>
        <button className="btn-close-help" onClick={onClose}>
          Close <i className="fas fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

window.HelpOverlay = HelpOverlay;
