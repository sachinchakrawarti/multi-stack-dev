function EndSlide({ title, subtitle }) {
  return (
    <div className="text-center py-10">
      <h1 className="slide-title justify-center text-5xl">{title}</h1>
      {subtitle && (
        <h2 className="slide-subtitle text-center border-l-0 text-2xl">
          {subtitle}
        </h2>
      )}
      <i className="fas fa-hand-peace text-7xl text-blue-500 mt-8"></i>
    </div>
  );
}

window.EndSlide = EndSlide;
