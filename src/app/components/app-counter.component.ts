import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.css']
})
export class AppCounterComponent {
  
  @Input()
  counter = 0

  @Output()
  onValueChanged = new Subject<number> 

  dec() {
    this.counter --
  }

  inc() {
    this.counter ++
  }

  count(delta: number) {
    this.counter += delta
    //notify subscribers
    this.onValueChanged.next(this.counter)
  }

}
