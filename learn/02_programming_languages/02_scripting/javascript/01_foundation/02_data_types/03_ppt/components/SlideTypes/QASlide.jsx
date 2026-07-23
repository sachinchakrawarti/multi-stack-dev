function QASlide({ title, questions }) {
  return (
    <>
      <h1 className="slide-title">{title}</h1>
      <div className="qa-container">
        {questions.map((q, i) => (
          <div key={i} className="qa-item">
            <i className="fas fa-circle-question"></i>
            {q}
          </div>
        ))}
      </div>
    </>
  );
}

window.QASlide = QASlide;
