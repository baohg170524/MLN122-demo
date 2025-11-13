import { useGame, type GameContextValue, type GameState } from '../context/GameContext.ts';

export type { GameState } from '../context/GameContext.ts';
export type { GameContextValue } from '../context/GameContext.ts';

export function useGameStore(): GameContextValue {
  return useGame();
}

export function useGameSelector<T>(selector: (state: GameState) => T): T {
  const { state } = useGame();
  return selector(state);
}

export function useGameDispatch() {
  const { dispatch } = useGame();
  return dispatch;
}

