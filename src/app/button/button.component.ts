

import {
  Input,
  Output,
  Component,
  ViewEncapsulation,
  EventEmitter,
  OnInit
} from '@angular/core';

@Component({
  selector: 'custom-button',
  template: ` <button (click)='onClick()'>{{label}}</button>`,
  styles: [
    `
      button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
  `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  @Input() label = 'default text';
  @Output() publish = new EventEmitter();
  
  ngOnInit(){
  console.log('====================================');
  console.log("Angular6 button has been created");
  console.log('====================================');
}
  public onClick() {
    this.publish.emit('Hello from Angular 6 ^-^ : ');
  }
}
