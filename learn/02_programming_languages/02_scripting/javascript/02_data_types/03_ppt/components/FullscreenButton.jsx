const { useState, useEffect, useCallback } = React;

// ============================================
// Fullscreen Hook
// ============================================
function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.error("Fullscreen error:", err));
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => console.error("Exit fullscreen error:", err));
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      document.body.classList.toggle(
        "fullscreen-mode",
        !!document.fullscreenElement,
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return { isFullscreen, toggleFullscreen };
}

// ============================================
// Fullscreen Button Component
// ============================================
function FullscreenButton({ isFullscreen, onToggle }) {
  return (
    <button
      className={`btn-fullscreen ${isFullscreen ? "active" : ""}`}
      onClick={onToggle}
      title={isFullscreen ? "Exit Fullscreen (F11)" : "Enter Fullscreen (F11)"}
    >
      <i className={`fas ${isFullscreen ? "fa-compress" : "fa-expand"}`}></i>
    </button>
  );
}

// Export both
window.FullscreenButton = FullscreenButton;
window.useFullscreen = useFullscreen;
