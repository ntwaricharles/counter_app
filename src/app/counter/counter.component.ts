import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  increment,
  decrement,
  reset,
  incrementBy,
  decrementBy,
  undo,
} from '../store/counter.actions';
import { selectCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count$: Observable<number>;
  incrementValue = 2;
  decrementValue = 2;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
  }

  onIncrement(): void {
    this.store.dispatch(increment());
  }

  onDecrement(): void {
    this.store.dispatch(decrement());
  }

  onReset(): void {
    this.store.dispatch(reset());
  }

  onIncrementBy(): void {
    if (this.incrementValue > 0) {
      this.store.dispatch(incrementBy({ value: this.incrementValue }));
    }
  }

  onDecrementBy(): void {
    if (this.decrementValue > 0) {
      this.store.dispatch(decrementBy({ value: this.decrementValue }));
    }
  }

  onUndo(): void {
    this.store.dispatch(undo());
  }
}
