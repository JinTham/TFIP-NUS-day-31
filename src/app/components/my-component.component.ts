import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  @Input()
  title = "Dancing bear"

  @Input()
  imgUrl = "assets/polar-bear.gif"
}
