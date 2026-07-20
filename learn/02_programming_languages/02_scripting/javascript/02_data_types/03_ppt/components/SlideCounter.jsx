function SlideCounter({ current, total }) {
  return (
    <div className="slide-counter">
      <span className="current">{current + 1}</span>
      <span className="text-gray-400">/</span>
      <span className="total">{total}</span>
    </div>
  );
}

window.SlideCounter = SlideCounter;
