import { createAction, props } from '@ngrx/store';

// Basic Counter Actions
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

// Custom Increment/Decrement Actions with Payload
export const incrementBy = createAction(
  '[Counter] Increment By',
  props<{ value: number }>()
);
export const decrementBy = createAction(
  '[Counter] Decrement By',
  props<{ value: number }>()
);

// Undo Last Action
export const undoLastAction = createAction('[Counter] Undo Last Action');
