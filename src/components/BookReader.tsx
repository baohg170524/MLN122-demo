import { useState, useEffect } from 'react';
import { useBookViewModel } from '../features/book/index.ts';
import './BookReader.css';

export function BookReader() {
  const { chapter, section, page, totalPages, shouldShowIntroAnimation, state, actions } =
    useBookViewModel();
  const [showAnimation, setShowAnimation] = useState(shouldShowIntroAnimation);

  useEffect(() => {
    if (!shouldShowIntroAnimation) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      setShowAnimation(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [shouldShowIntroAnimation]);

  useEffect(() => {
    if (!showAnimation) {
      return;
    }

    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showAnimation]);

  if (showAnimation) {
    return (
      <div className="book-animation-overlay">
        <div className="book-opening">
          <div className="book-cover">
            <h2>📚 MLN 122</h2>
            <p>Kinh tế Chính trị Mác - Lênin</p>
          </div>
          <div className="animation-text">
            <p>Chào mừng đến với MLN 122! 📖</p>
            <p>Dùng nút [Trước/Tiếp] để lật trang 👆</p>
            <p>Nhấn vào [Về Bản đồ] để thoát nội dung</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="book-reader card-surface">
      <div className="book-header">
        <button className="map-button interactive" type="button" onClick={actions.goToMap}>
          <span className="map-button__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
              <path d="M4 2L0 1V14L4 15V2Z" fill="currentColor" />
              <path d="M16 2L12 1V14L16 15V2Z" fill="currentColor" />
              <path d="M10 1L6 2V15L10 14V1Z" fill="currentColor" />
            </svg>
          </span>
          <span>Về Bản đồ</span>
        </button>
        <div className="chapter-info">
          <h2>{chapter?.title}</h2>
          <h3>{section?.title}</h3>
        </div>
      </div>

      <div className="book-content">
        <div className="page">
          <div className="page-number">Trang {state.currentPage}</div>
          <div className="page-content">{page?.content}</div>
        </div>
      </div>

      <div className="book-navigation">
        <button
          className="nav-button prev interactive"
          onClick={actions.goToPreviousPage}
          disabled={state.currentPage === 1}
        >
          ← Trước
        </button>

        <div className="page-indicator">
          {state.currentPage} / {totalPages}
        </div>

        <button className="nav-button next interactive" onClick={actions.goToNextPage}>
          {state.currentPage === totalPages ? 'Quiz 🧠' : 'Tiếp →'}
        </button>
      </div>
    </div>
  );
}
