import { GameProvider } from './components/GameState.tsx';
import { useGame } from './context/GameContext.ts';
import { MapView } from './components/MapView.tsx';
import { BookView } from './components/BookView.tsx';
import { QuizView } from './components/QuizView.tsx';
import './App.css';

function AppContent() {
  const { state } = useGame();

  if (state.showQuiz) {
    return <QuizView />;
  }

  if (state.isBookMode) {
    return <BookView />;
  }

  return <MapView />;
}

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;