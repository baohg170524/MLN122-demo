import { useMemo, useCallback } from 'react';
import { chapters, type Chapter, type Section, type Page } from '../../data/chapters.ts';
import { useGameStore } from '../../store/gameStore.ts';

export interface BookViewModel {
  chapter: Chapter | undefined;
  section: Section | undefined;
  page: Page | undefined;
  totalPages: number;
  shouldShowIntroAnimation: boolean;
  state: ReturnType<typeof useGameStore>['state'];
  actions: {
    goToNextPage: () => void;
    goToPreviousPage: () => void;
    goToMap: () => void;
    markSectionComplete: (sectionId: string) => void;
  };
}

export function useBookViewModel(): BookViewModel {
  const { state, dispatch } = useGameStore();

  const chapter = useMemo(
    () => chapters.find((item) => item.id === state.currentChapter),
    [state.currentChapter],
  );

  const section = useMemo(
    () => chapter?.sections.find((item) => item.id === state.currentSection),
    [chapter, state.currentSection],
  );

  const page = useMemo(
    () => section?.pages.find((item) => item.id === state.currentPage),
    [section, state.currentPage],
  );

  const totalPages = section?.pages.length ?? 0;

  const markSectionComplete = useCallback(
    (sectionId: string) => {
      const key = `${state.currentChapter}-${sectionId}`;
      if (!state.visitedLocations.includes(key)) {
        dispatch({
          type: 'ADD_VISITED_LOCATION',
          payload: key,
        });
      }
    },
    [dispatch, state.currentChapter, state.visitedLocations],
  );

  const goToNextPage = useCallback(() => {
    if (!section) {
      return;
    }

    if (state.currentPage < section.pages.length) {
      dispatch({ type: 'SET_PAGE', payload: state.currentPage + 1 });
      return;
    }

    markSectionComplete(state.currentSection);
    dispatch({ type: 'SHOW_QUIZ', payload: true });
    dispatch({ type: 'SET_QUIZ_INDEX', payload: 0 });
  }, [dispatch, markSectionComplete, section, state.currentPage, state.currentSection]);

  const goToPreviousPage = useCallback(() => {
    if (state.currentPage > 1) {
      dispatch({ type: 'SET_PAGE', payload: state.currentPage - 1 });
    }
  }, [dispatch, state.currentPage]);

  const goToMap = useCallback(() => {
    dispatch({ type: 'TOGGLE_BOOK_MODE' });
  }, [dispatch]);

  return {
    chapter,
    section,
    page,
    totalPages,
    shouldShowIntroAnimation:
      state.isBookMode && state.currentPage === 1 && state.currentChapter === 'chapter1',
    state,
    actions: {
      goToNextPage,
      goToPreviousPage,
      goToMap,
      markSectionComplete,
    },
  };
}

