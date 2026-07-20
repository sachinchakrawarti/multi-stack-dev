function SummarySlide({ title, items }) {
  return (
    <>
      <h1 className="slide-title">{title}</h1>
      <ul className="summary-list">
        {items.map((item, i) => (
          <li key={i}>
            <i className="fas fa-check"></i>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

window.SummarySlide = SummarySlide;
