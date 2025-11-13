import { useState } from 'react';
import { useSectionQuizState, useQuizActions } from '../features/quiz/index.ts';
import './Quiz.css';

export function Quiz() {
  const { state, section, quiz } = useSectionQuizState();
  const quizActions = useQuizActions();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null || !quiz || !section) {
      return;
    }

    setIsAnswered(true);
    quizActions.recordAttempt(`${section.id}-${quiz.id}`);

    if (selectedAnswer === quiz.correctAnswer) {
      quizActions.addScore(10);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (section && state.currentQuizIndex < section.quizzes.length - 1) {
      quizActions.setQuizIndex(state.currentQuizIndex + 1);
      return;
    }

    quizActions.resetQuizState();
    quizActions.toggleBookMode();
  };

  if (!quiz || !section) {
    return <div>Không tìm thấy câu hỏi!</div>;
  }

  return (
    <div className="quiz-container card-surface">
      <div className="quiz-card">
        <div className="quiz-header">
          <h2>🧠 BÀI TẬP TRẮC NGHIỆM</h2>
          <div className="quiz-progress">
            Câu hỏi {state.currentQuizIndex + 1} / {section.quizzes.length}
          </div>
        </div>

        <div className="question-section">
          <p className="question-text">{quiz.question}</p>
        </div>

        <div className="options-section">
          {quiz.options.map((option, index) => {
            const isCorrect = index === quiz.correctAnswer;
            const isSelected = index === selectedAnswer;
            let buttonClass = 'option-button interactive';
            if (isAnswered) {
              if (isCorrect) buttonClass += ' correct';
              else if (isSelected) buttonClass += ' incorrect';
            }

            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => !isAnswered && setSelectedAnswer(index)}
                disabled={isAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="explanation-section">
            <h4>Giải thích:</h4>
            <p>{quiz.explanation}</p>
          </div>
        )}

        <div className="quiz-footer">
          {isAnswered ? (
            <button className="next-button interactive" onClick={handleNextQuestion}>
              {state.currentQuizIndex === section.quizzes.length - 1
                ? 'Hoàn thành & Về bản đồ'
                : 'Câu tiếp theo →'}
            </button>
          ) : (
            <button
              className="submit-button interactive"
              onClick={handleAnswerSubmit}
              disabled={selectedAnswer === null}
            >
              Trả lời
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
