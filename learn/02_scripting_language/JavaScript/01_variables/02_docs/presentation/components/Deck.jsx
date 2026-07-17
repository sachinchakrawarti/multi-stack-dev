"use client";

import { Children, useEffect, useState } from "react";

export default function Deck({ children }) {
  const slides = Children.toArray(children);

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev < totalSlides - 1 ? prev + 1 : prev
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : prev
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowRight":
        case " ":
        case "Enter":
        case "PageDown":
          nextSlide();
          break;

        case "ArrowLeft":
        case "Backspace":
        case "PageUp":
          previousSlide();
          break;

        case "Home":
          setCurrentSlide(0);
          break;

        case "End":
          setCurrentSlide(totalSlides - 1);
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  return (
    <div className="deck">

      {/* Current Slide */}
      <div className="slide-container">
        {slides[currentSlide]}
      </div>

      {/* Bottom Controls */}
      <div className="deck-footer">

        <button
          onClick={previousSlide}
          disabled={currentSlide === 0}
        >
          ◀ Previous
        </button>

        <span>
          {currentSlide + 1} / {totalSlides}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          Next ▶
        </button>

      </div>

      {/* Progress Bar */}
      <div className="progress">
        <div
          className="progress-fill"
          style={{
            width: `${
              ((currentSlide + 1) / totalSlides) * 100
            }%`,
          }}
        />
      </div>

    </div>
  );
}