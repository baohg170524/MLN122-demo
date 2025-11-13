export interface Page {
  id: number;
  content: string;
}

export interface Quiz {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Section {
  id: string;
  title: string;
  pages: Page[];
  quizzes: Quiz[];
}

export interface Chapter {
  id: string;
  title: string;
  sections: Section[];
}

import { chapter1 } from './chapters/chapter1.ts';
import { chapter2 } from './chapters/chapter2.ts';
import { chapter3 } from './chapters/chapter3.ts';
import { chapter4 } from './chapters/chapter4.ts';
import { chapter5 } from './chapters/chapter5.ts';
import { chapter6 } from './chapters/chapter6.ts';

export const chapters: Chapter[] = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6];

export const gameState = {
  currentChapter: "chapter1",
  currentSection: "section1",
  currentPage: 1,
  totalScore: 0,
  visitedLocations: [] as string[],
  quizAttempts: {} as Record<string, number>,
  isBookMode: true
};
