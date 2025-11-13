import { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { chapterLocations } from '../data/chapterLocations.ts';
import type { NavigationChapter } from '../features/navigation/index.ts';
import './ChapterMap.css';

const VIETNAM_CENTER: [number, number] = [16.7, 106.7];

function createMarkerIcon(progress: number) {
  const progressClass =
    progress === 100 ? 'chapter-marker--completed' : progress > 0 ? 'chapter-marker--inprogress' : 'chapter-marker--fresh';

  return L.divIcon({
    className: `chapter-marker ${progressClass}`,
    html: `<span class="chapter-marker__progress">${progress}%</span>`,
    iconSize: [52, 66],
    iconAnchor: [26, 58],
    popupAnchor: [0, -52],
  });
}

export interface ChapterMapProps {
  chapters: NavigationChapter[];
  onSelectChapter: (chapterId: string) => void;
}

export function ChapterMap({ chapters, onSelectChapter }: ChapterMapProps) {
  const markers = useMemo(() => {
    return chapterLocations.map((location) => {
      const chapterMeta = chapters.find((chapter) => chapter.id === location.id);
      const progress = chapterMeta?.progress ?? 0;
      return {
        ...location,
        progress,
        icon: createMarkerIcon(progress),
      };
    });
  }, [chapters]);

  return (
    <MapContainer
      center={VIETNAM_CENTER}
      zoom={5.4}
      minZoom={4}
      maxZoom={12}
      className="chapter-map"
      zoomControl={false}
      scrollWheelZoom
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.latitude, marker.longitude]}
          icon={marker.icon}
          eventHandlers={{
            click: () => onSelectChapter(marker.id),
          }}
        >
          <Popup className="chapter-popup">
            <strong>{marker.title}</strong>
            <p>{marker.summary}</p>
            <p className="chapter-popup__progress">Tiến độ: {marker.progress}%</p>
            <button
              type="button"
              className="chapter-popup__button"
              onClick={() => onSelectChapter(marker.id)}
            >
              Khám phá chương
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

