import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, undoLastAction } from './counter.actions';

export interface CounterHistoryState {
  history: number[];
}

export const initialHistoryState: CounterHistoryState = {
  history: [],
};

export const counterHistoryReducer = createReducer(
  initialHistoryState,
  on(increment, (state) => ({
    ...state,
    history: [...state.history, 1],
  })),
  on(decrement, (state) => ({
    ...state,
    history: [...state.history, -1],
  })),
  on(reset, (state) => ({
    ...state,
    history: [...state.history, 0],
  })),
  on(undoLastAction, (state) => ({
    ...state,
    history: state.history.slice(0, -1),
  }))
);
