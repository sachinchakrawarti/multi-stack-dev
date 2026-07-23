function CodeSlide({ title, code }) {
  return (
    <>
      <h1 className="slide-title">{title}</h1>
      <div className="code-wrapper">
        <pre className="code">{code}</pre>
      </div>
    </>
  );
}

window.CodeSlide = CodeSlide;
