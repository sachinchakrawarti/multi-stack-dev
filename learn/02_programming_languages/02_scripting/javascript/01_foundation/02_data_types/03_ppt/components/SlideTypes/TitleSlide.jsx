function TitleSlide({ title, subtitle }) {
  return (
    <div className="text-center">
      <h1 className="slide-title justify-center">{title}</h1>
      {subtitle && (
        <h2 className="slide-subtitle text-center border-l-0">{subtitle}</h2>
      )}
    </div>
  );
}

window.TitleSlide = TitleSlide;
