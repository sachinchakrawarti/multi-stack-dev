function Navigation({
  currentSlide,
  totalSlides,
  onHome,
  onPrev,
  onNext,
  onGoTo,
}) {
  return (
    <div className="navigation">
      <button className="btn-nav" onClick={onHome} title="First slide">
        <i className="fas fa-fast-backward"></i>
      </button>
      <button
        className="btn-nav"
        onClick={onPrev}
        disabled={currentSlide === 0}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <span className="nav-counter">
        {currentSlide + 1} / {totalSlides}
      </span>
      <button
        className="btn-nav"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <button
        className="btn-nav"
        onClick={() => onGoTo(totalSlides - 1)}
        title="Last slide"
      >
        <i className="fas fa-fast-forward"></i>
      </button>
    </div>
  );
}

window.Navigation = Navigation;
