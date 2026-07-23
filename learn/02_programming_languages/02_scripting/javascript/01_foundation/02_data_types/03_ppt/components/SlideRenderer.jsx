// Import all slide type components
// Note: These will be loaded as separate files

function SlideRenderer({ slide }) {
  const renderContent = () => {
    switch (slide.type) {
      case "title":
        return <TitleSlide title={slide.title} subtitle={slide.subtitle} />;
      case "bullets":
        return <BulletsSlide title={slide.title} bullets={slide.bullets} />;
      case "code":
        return <CodeSlide title={slide.title} code={slide.code} />;
      case "table":
        return <TableSlide title={slide.title} table={slide.table} />;
      case "qa":
        return <QASlide title={slide.title} questions={slide.questions} />;
      case "summary":
        return <SummarySlide title={slide.title} items={slide.items} />;
      case "end":
        return <EndSlide title={slide.title} subtitle={slide.subtitle} />;
      default:
        return <h1 className="slide-title">{slide.title}</h1>;
    }
  };

  return <div className="slide">{renderContent()}</div>;
}

window.SlideRenderer = SlideRenderer;
