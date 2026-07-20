function BulletsSlide({ title, bullets }) {
  return (
    <>
      <h1 className="slide-title">{title}</h1>
      <ul className="bullets">
        {bullets.map((item, index) => (
          <li key={index}>
            <i className="fas fa-check-circle"></i>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

window.BulletsSlide = BulletsSlide;
