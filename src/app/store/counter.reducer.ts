// src/app/store/counter.reducer.ts

import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  incrementBy,
  decrementBy,
} from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => initialState),
  on(incrementBy, (state, { value }) => state + value),
  on(decrementBy, (state, { value }) => Math.max(state - value, 0)) // Ensure state does not go below 0
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
