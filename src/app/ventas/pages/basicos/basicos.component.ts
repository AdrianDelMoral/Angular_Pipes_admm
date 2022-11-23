import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'adrián';
  nombreUpper: string = 'ADRIÁN';
  nombreCompleto: string = 'AdRiáN DeL MoRaL';

  fecha: Date = new Date(); // el día de hoy
}
