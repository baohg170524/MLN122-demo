import { useMemo, useCallback } from 'react';
import {
  chapters,
  type Chapter,
  type Section,
  type Quiz as SectionQuiz,
} from '../../data/chapters.ts';
import { useGameStore, useGameSelector } from '../../store/gameStore.ts';

export interface GeneratedQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number;
}

export function useSectionQuizState() {
  const { state, dispatch } = useGameStore();

  const chapter = useMemo(
    () => chapters.find((item) => item.id === state.currentChapter),
    [state.currentChapter],
  );

  const section = useMemo(
    () => chapter?.sections.find((item) => item.id === state.currentSection),
    [chapter, state.currentSection],
  );

  const quiz = section?.quizzes[state.currentQuizIndex] ?? null;

  return {
    state,
    dispatch,
    chapter,
    section,
    quiz,
  };
}

export function useChapterQuizQuestions(chapterId: string): GeneratedQuizQuestion[] {
  return useMemo(() => {
    const chapter = chapters.find((item) => item.id === chapterId);
    if (!chapter) {
      return [];
    }
    return buildQuizFromChapter(chapter);
  }, [chapterId]);
}

export function useQuizActions() {
  const { dispatch } = useGameStore();

  const addScore = useCallback(
    (points: number) => {
      dispatch({ type: 'ADD_SCORE', payload: points });
    },
    [dispatch],
  );

  const recordAttempt = useCallback(
    (questionId: string) => {
      dispatch({ type: 'INCREMENT_QUIZ_ATTEMPT', payload: questionId });
    },
    [dispatch],
  );

  const resetQuizState = useCallback(() => {
    dispatch({ type: 'RESET_QUIZ_STATE' });
  }, [dispatch]);

  const toggleBookMode = useCallback(() => {
    dispatch({ type: 'TOGGLE_BOOK_MODE' });
  }, [dispatch]);

  const showQuiz = useCallback(
    (visible: boolean) => {
      dispatch({ type: 'SHOW_QUIZ', payload: visible });
    },
    [dispatch],
  );

  const setQuizIndex = useCallback(
    (index: number) => {
      dispatch({ type: 'SET_QUIZ_INDEX', payload: index });
    },
    [dispatch],
  );

  return {
    addScore,
    recordAttempt,
    resetQuizState,
    toggleBookMode,
    showQuiz,
    setQuizIndex,
  };
}

export function useQuizStats() {
  return useGameSelector((state) => ({
    attempts: Object.keys(state.quizAttempts).length,
    totalScore: state.totalScore,
  }));
}

function buildQuizFromChapter(chapter: Chapter): GeneratedQuizQuestion[] {
  const questions: GeneratedQuizQuestion[] = [];

  chapter.sections.forEach((section: Section) => {
    if (section.pages.length > 0) {
      questions.push(buildSummaryQuestion(chapter, section));
    }

    section.quizzes.forEach((quiz: SectionQuiz) => {
      questions.push({
        id: `${chapter.id}-${section.id}-${quiz.id}`,
        question: quiz.question,
        options: quiz.options,
        correctAnswer: quiz.correctAnswer,
        explanation: quiz.explanation,
        points: 15,
      });
    });
  });

  return questions.slice(0, 10);
}

function buildSummaryQuestion(chapter: Chapter, section: Section): GeneratedQuizQuestion {
  const preview = section.pages[0]?.content ?? 'Nội dung chính';
  return {
    id: `${chapter.id}-${section.id}-summary`,
    question: `Nội dung chính của "${section.title}" là gì?`,
    options: [
      `${preview.substring(0, 50)}...`,
      'Nội dung không liên quan A',
      'Nội dung không liên quan B',
      'Nội dung không liên quan C',
    ],
    correctAnswer: 0,
    explanation: `Đây là nội dung chính được trình bày trong phần ${section.title}`,
    points: 10,
  };
}

