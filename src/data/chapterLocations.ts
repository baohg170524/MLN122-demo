export interface ChapterLocation {
  id: string;
  title: string;
  summary: string;
  latitude: number;
  longitude: number;
}

export const chapterLocations: ChapterLocation[] = [
  {
    id: 'chapter1',
    title: 'Chương 1',
    summary: 'Đối tượng, phương pháp nghiên cứu và chức năng của kinh tế chính trị Mác - Lênin.',
    latitude: 21.0278,
    longitude: 105.8342,
  },
  {
    id: 'chapter2',
    title: 'Chương 2',
    summary: 'Hàng hóa, thị trường và vai trò của các chủ thể tham gia thị trường.',
    latitude: 18.6667,
    longitude: 105.6667,
  },
  {
    id: 'chapter3',
    title: 'Chương 3',
    summary: 'Giá trị thặng dư trong nền kinh tế thị trường.',
    latitude: 16.0471,
    longitude: 108.2068,
  },
  {
    id: 'chapter4',
    title: 'Chương 4',
    summary: 'Cạnh tranh và độc quyền trong nền kinh tế thị trường.',
    latitude: 12.2388,
    longitude: 109.1967,
  },
  {
    id: 'chapter5',
    title: 'Chương 5',
    summary: 'Kinh tế thị trường định hướng xã hội chủ nghĩa và các quan hệ lợi ích ở Việt Nam.',
    latitude: 10.8231,
    longitude: 106.6297,
  },
  {
    id: 'chapter6',
    title: 'Chương 6',
    summary: 'Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế của Việt Nam.',
    latitude: 9.1767,
    longitude: 105.1524,
  },
];

