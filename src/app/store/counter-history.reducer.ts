import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  incrementBy,
  decrementBy,
  undo,
} from './counter.actions';


export interface CounterHistoryState {
  value: number;
  history: number[];
}

export const initialState: CounterHistoryState = {
  value: 0,
  history: [],
};

export const counterHistoryReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    history: [...state.history, state.value],
    value: state.value + 1,
  })),
  on(decrement, (state) => ({
    ...state,
    history: [...state.history, state.value],
    value: state.value > 0 ? state.value - 1 : state.value,
  })),
  on(reset, (state) => ({
    ...state,
    history: [...state.history, state.value],
    value: 0,
  })),
  on(incrementBy, (state, { value }) => ({
    ...state,
    history: [...state.history, state.value],
    value: state.value + value,
  })),
  on(decrementBy, (state, { value }) => ({
    ...state,
    history: [...state.history, state.value],
    value: state.value >= value ? state.value - value : state.value,
  })),
  on(undo, (state) => ({
    ...state,
    value:
      state.history.length > 0
        ? state.history[state.history.length - 1]
        : state.value,
    history: state.history.slice(0, -1),
  }))
);
