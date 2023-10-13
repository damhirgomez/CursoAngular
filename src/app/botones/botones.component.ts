import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
})
export class BotonesComponent {
  textColor = '';
  button_disabled = false;
  cambiarColor(color: string) {
    this.textColor = 'text-' + color;
  }
}
