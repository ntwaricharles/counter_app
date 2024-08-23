import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  incrementBy,
  decrementBy,
  undoLastAction,
} from './counter.actions';

export interface CounterState {
  value: number;
  history: number[];
}

export const initialState: CounterState = {
  value: 0,
  history: [],
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    value: state.value + 1,
    history: [...state.history, state.value + 1],
  })),
  on(decrement, (state) => ({
    ...state,
    value: Math.max(0, state.value - 1),
    history: [...state.history, Math.max(0, state.value - 1)],
  })),
  on(reset, (state) => ({
    ...state,
    value: 0,
    history: [...state.history, 0],
  })),
  on(incrementBy, (state, { value }) => ({
    ...state,
    value: state.value + value,
    history: [...state.history, state.value + value],
  })),
  on(decrementBy, (state, { value }) => ({
    ...state,
    value: Math.max(0, state.value - value),
    history: [...state.history, Math.max(0, state.value - value)],
  })),
  on(undoLastAction, (state) => {
    const lastValue = state.history[state.history.length - 2] || 0;
    return {
      ...state,
      value: lastValue,
      history: state.history.slice(0, -1),
    };
  })
);
