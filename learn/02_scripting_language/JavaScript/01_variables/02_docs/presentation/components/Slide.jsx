import "../theme/presentation.css";

export default function Slide({ children }) {
  return (
    <section className="ppt-slide">
      <div className="ppt-content">
        {children}
      </div>
    </section>
  );
}