function Header({
  title = "JavaScript PPT",
  children,
  autoPlay,
  onAutoPlayToggle,
  onExportClick,
  onSettingsClick,
  onHelpClick,
  onFullscreenToggle,
  isFullscreen,
  currentSlide,
  totalSlides,
}) {
  return (
    <header className="header">
      <div className="logo">
        <i className="fa-brands fa-js"></i>
        {title}
      </div>
      <div className="header-controls">{children}</div>
    </header>
  );
}

window.Header = Header;
