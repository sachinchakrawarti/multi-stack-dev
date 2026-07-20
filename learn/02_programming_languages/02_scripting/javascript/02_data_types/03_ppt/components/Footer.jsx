function Footer({
  onHome,
  onPrev,
  onNext,
  currentSlide,
  totalSlides,
  prevDisabled,
  nextDisabled,
}) {
  return (
    <footer className="footer">
      <button className="btn-home" onClick={onHome} title="First slide">
        <i className="fas fa-house"></i>
      </button>
      <button
        className="btn-prev"
        onClick={onPrev}
        disabled={prevDisabled}
        title="Previous slide"
      >
        <i className="fas fa-arrow-left"></i> Previous
      </button>
      <button
        className="btn-next"
        onClick={onNext}
        disabled={nextDisabled}
        title="Next slide"
      >
        Next <i className="fas fa-arrow-right"></i>
      </button>
    </footer>
  );
}

window.Footer = Footer;
