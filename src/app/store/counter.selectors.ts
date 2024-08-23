import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

export const selectCounterState = createFeatureSelector<CounterState>('count');

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state.value
);
