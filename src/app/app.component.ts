import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31';
  value = 10;
  historicalValue: number[]= []

  valueChange(V:number) {
    console.info('>>> value changed', V)
    this.value = V
    this.historicalValue.push(V)
  }

  deleteValue(idx: number) {
    this.historicalValue.splice(idx,1)
  }
}
