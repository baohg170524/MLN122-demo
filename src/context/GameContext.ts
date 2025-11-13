import { createContext, useContext, type Dispatch } from 'react';

export interface GameState {
  currentChapter: string;
  currentSection: string;
  currentPage: number;
  totalScore: number;
  visitedLocations: string[];
  quizAttempts: Record<string, number>;
  isBookMode: boolean;
  showQuiz: boolean;
  currentQuizIndex: number;
}

export type GameAction =
  | { type: 'SET_CHAPTER'; payload: string }
  | { type: 'SET_SECTION'; payload: string }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'ADD_SCORE'; payload: number }
  | { type: 'ADD_VISITED_LOCATION'; payload: string }
  | { type: 'INCREMENT_QUIZ_ATTEMPT'; payload: string }
  | { type: 'TOGGLE_BOOK_MODE' }
  | { type: 'SHOW_QUIZ'; payload: boolean }
  | { type: 'SET_QUIZ_INDEX'; payload: number }
  | { type: 'RESET_QUIZ_STATE' };

export interface GameContextValue {
  state: GameState;
  dispatch: Dispatch<GameAction>;
}

export const GameContext = createContext<GameContextValue | null>(null);

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}

