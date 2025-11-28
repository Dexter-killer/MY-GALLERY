// src/components/ImageGallery.jsx
import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) {
    return <div className="gallery-empty">Галерея пуста</div>;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const current = slides[currentIndex];

  return (
    <section className="gallery-shell">
      <div className="gallery-meta">
        <p className="meta-eyebrow">Curated collection</p>
        <h1 className="meta-title">Lux Gallery</h1>
        <p className="meta-subtitle">
          Минималистичная галерея с плавным переключением и мягким фоном.
        </p>
      </div>

      <div className="gallery-panel glass-card">
        <div className="gallery-main" key={currentIndex}>
          <div className="slide-counter">
            {String(currentIndex + 1).padStart(2, '0')}
            <span> / {String(slides.length).padStart(2, '0')}</span>
          </div>

          <img
            src={current.url}
            alt={current.title || 'Slide'}
            className="main-image"
          />

          <button
            className="nav-btn nav-left"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            className="nav-btn nav-right"
            onClick={goToNext}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        <div className="gallery-thumbs">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              className={
                'thumb-item' +
                (index === currentIndex ? ' thumb-active' : '')
              }
              onClick={() => goToSlide(index)}
            >
              <img src={slide.url} alt={slide.title || `Thumb ${index}`} />
              <div className="thumb-gradient" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
