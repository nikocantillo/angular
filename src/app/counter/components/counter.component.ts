import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <p>Counter: {{count}}</p>
        <button (click)="increseBy(1)">+1</button>
        <button (click)="increseBy(-1)">-1</button>
        <button (click)="resetCounter()">Reset Counter</button>
    `
})

export class CounterComponent {
  public count: number = 10;

  increseBy( value: number): void {
    this.count += value;
  }
  resetCounter() {
    this.count = 10
  }
}