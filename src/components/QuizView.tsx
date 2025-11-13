import { useState } from 'react';
import './QuizView.css';
import { useGameStore } from '../store/gameStore.ts';
import {
  useChapterQuizQuestions,
  useQuizActions,
  type GeneratedQuizQuestion,
} from '../features/quiz/index.ts';

interface QuizSessionProps {
  quizQuestions: GeneratedQuizQuestion[];
  actions: ReturnType<typeof useQuizActions>;
  onBack: () => void;
  onComplete: () => void;
}

export function QuizView() {
  const { state } = useGameStore();
  const quizActions = useQuizActions();
  const quizQuestions = useChapterQuizQuestions(state.currentChapter);

  const handleBackToBook = () => {
    quizActions.showQuiz(false);
  };

  const handleQuizComplete = () => {
    quizActions.resetQuizState();
    quizActions.toggleBookMode();
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="quiz-view">
        <div className="quiz-loading card-surface">
          <h2>Đang tải câu hỏi...</h2>
          <button onClick={handleBackToBook} className="back-button interactive">
            ← Quay lại đọc sách
          </button>
        </div>
      </div>
    );
  }

  return (
    <QuizSession
      key={state.currentChapter}
      quizQuestions={quizQuestions}
      actions={quizActions}
      onBack={handleBackToBook}
      onComplete={handleQuizComplete}
    />
  );
}

function QuizSession({ quizQuestions, actions, onBack, onComplete }: QuizSessionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setShowResult(true);

    if (isCorrect) {
      setQuizScore((score) => score + currentQuestion.points);
      actions.addScore(currentQuestion.points);
    }

    actions.recordAttempt(currentQuestion.id);
  };

  const handleQuizComplete = () => {
    const finalScore = quizScore;
    const totalPossible = quizQuestions.reduce((sum, question) => sum + question.points, 0);
    const percentage = totalPossible > 0 ? Math.round((finalScore / totalPossible) * 100) : 0;

    alert(`Hoàn thành bài kiểm tra!\n\nĐiểm số: ${finalScore}/${totalPossible}\nTỷ lệ đúng: ${percentage}%`);

    onComplete();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((index) => index + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      handleQuizComplete();
    }
  };

  return (
    <div className="quiz-view">
      <div className="quiz-header card-surface">
        <button onClick={onBack} className="back-button interactive">
          ← Quay lại đọc sách
        </button>
        <div className="quiz-progress">
          <span>
            Câu {currentQuestionIndex + 1} / {quizQuestions.length}
          </span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className="quiz-score">🏆 {quizScore} điểm</div>
      </div>

      <div className="quiz-content">
        <div className="question-card card-surface">
          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="options-list">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-button interactive ${
                  selectedAnswer === index ? 'selected' : ''
                } ${
                  showResult && index === currentQuestion.correctAnswer ? 'correct' : ''
                } ${
                  showResult && selectedAnswer === index && index !== currentQuestion.correctAnswer ? 'incorrect' : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="result-section">
              <div
                className={`result-message ${
                  selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'
                }`}
              >
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <>
                    <span className="result-icon">✅</span>
                    <span>Chính xác! +{currentQuestion.points} điểm</span>
                  </>
                ) : (
                  <>
                    <span className="result-icon">❌</span>
                    <span>
                      Sai rồi! Đáp án đúng là {String.fromCharCode(65 + currentQuestion.correctAnswer)}
                    </span>
                  </>
                )}
              </div>

              <div className="explanation">
                <strong>Giải thích:</strong> {currentQuestion.explanation}
              </div>
            </div>
          )}

          <div className="quiz-actions">
            {!showResult ? (
              <button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="submit-button interactive">
                Xác nhận đáp án
              </button>
            ) : (
              <button onClick={handleNextQuestion} className="next-button interactive">
                {currentQuestionIndex < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

