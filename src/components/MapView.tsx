import { ChapterMap } from './ChapterMap.tsx';
import { useNavigationViewModel } from '../features/navigation/index.ts';
import './MapView.css';

export function MapView() {
  const { chapters, stats, selectChapter } = useNavigationViewModel();

  return (
    <div className="map-view">
      <ChapterMap chapters={chapters} onSelectChapter={selectChapter} />

      <div className="map-overlay">
        <header className="map-overlay__header card-surface">
          <div>
            <p className="map-overlay__tagline">Hành trình học tập</p>
            <h1 className="map-overlay__title">
              <span className="map-overlay__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                  <path d="M4 2L0 1V14L4 15V2Z" fill="currentColor" />
                  <path d="M16 2L12 1V14L16 15V2Z" fill="currentColor" />
                  <path d="M10 1L6 2V15L10 14V1Z" fill="currentColor" />
                </svg>
              </span>
              Bản đồ kiến thức MLN 122
            </h1>
          </div>

          <div className="map-overlay__score">
            <span className="map-overlay__score-label">Tổng điểm</span>
            <strong>{stats.totalScore}</strong>
          </div>
        </header>

        <section className="map-overlay__stats card-surface">
          <div className="map-stat">
            <div className="map-stat__icon">📖</div>
            <div className="map-stat__content">
              <span className="map-stat__label">Trang đã đọc </span>
              <strong className="map-stat__value">{stats.visitedLocations}</strong>
            </div>
          </div>

          <div className="map-stat">
            <div className="map-stat__icon">🧠</div>
            <div className="map-stat__content">
              <span className="map-stat__label">Câu hỏi đã trả lời </span>
              <strong className="map-stat__value">{stats.quizAttempts}</strong>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
