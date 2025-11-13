import { useMemo, useCallback } from 'react';
import { chapters } from '../../data/chapters.ts';
import { useGameStore } from '../../store/gameStore.ts';

export interface NavigationChapter {
  id: string;
  title: string;
  index: number;
  progress: number;
  isUnlocked: boolean;
}

export interface NavigationStats {
  totalScore: number;
  visitedLocations: number;
  quizAttempts: number;
}

export interface NavigationViewModel {
  chapters: NavigationChapter[];
  stats: NavigationStats;
  selectChapter: (chapterId: string) => void;
}

export function useNavigationViewModel(): NavigationViewModel {
  const { state, dispatch } = useGameStore();

  const chaptersWithProgress = useMemo<NavigationChapter[]>(() => {
    return chapters.map((chapter, index) => {
      const totalSections = chapter.sections.length;
      const completedSections = chapter.sections.filter((section) =>
        state.visitedLocations.includes(`${chapter.id}-${section.id}`),
      ).length;

      const progress =
        totalSections === 0 ? 0 : Math.round((completedSections / totalSections) * 100);

      const isUnlocked = true;

      return {
        id: chapter.id,
        title: chapter.title,
        index,
        progress,
        isUnlocked,
      };
    });
  }, [state.visitedLocations]);

  const selectChapter = useCallback(
    (chapterId: string) => {
      const chapter = chapters.find((item) => item.id === chapterId);
      if (!chapter || chapter.sections.length === 0) {
        return;
      }

      dispatch({ type: 'SET_CHAPTER', payload: chapterId });
      dispatch({ type: 'SET_SECTION', payload: chapter.sections[0].id });
      dispatch({ type: 'SET_PAGE', payload: 1 });
      dispatch({ type: 'SHOW_QUIZ', payload: false });
      dispatch({ type: 'SET_QUIZ_INDEX', payload: 0 });
      dispatch({ type: 'TOGGLE_BOOK_MODE' });
    },
    [dispatch],
  );

  const stats: NavigationStats = useMemo(
    () => ({
      totalScore: state.totalScore,
      visitedLocations: state.visitedLocations.length,
      quizAttempts: Object.keys(state.quizAttempts).length,
    }),
    [state.quizAttempts, state.totalScore, state.visitedLocations],
  );

  return {
    chapters: chaptersWithProgress,
    stats,
    selectChapter,
  };
}

