import { useReducer, type ReactNode } from 'react';
import { GameContext, type GameAction, type GameState } from '../context/GameContext.ts';

const initialState: GameState = {
  currentChapter: "chapter1",
  currentSection: "section1", 
  currentPage: 1,
  totalScore: 0,
  visitedLocations: [],
  quizAttempts: {},
  isBookMode: true,
  showQuiz: false,
  currentQuizIndex: 0
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_CHAPTER':
      return { ...state, currentChapter: action.payload };
    case 'SET_SECTION':
      return { ...state, currentSection: action.payload };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    case 'ADD_SCORE':
      return { ...state, totalScore: state.totalScore + action.payload };
    case 'ADD_VISITED_LOCATION':
      return { 
        ...state, 
        visitedLocations: [...state.visitedLocations, action.payload] 
      };
    case 'INCREMENT_QUIZ_ATTEMPT':
      return {
        ...state,
        quizAttempts: {
          ...state.quizAttempts,
          [action.payload]: (state.quizAttempts[action.payload] || 0) + 1
        }
      };
    case 'TOGGLE_BOOK_MODE':
      return { ...state, isBookMode: !state.isBookMode };
    case 'SHOW_QUIZ':
      return { ...state, showQuiz: action.payload };
    case 'SET_QUIZ_INDEX':
      return { ...state, currentQuizIndex: action.payload };
    case 'RESET_QUIZ_STATE':
      return { ...state, showQuiz: false, currentQuizIndex: 0 };
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
