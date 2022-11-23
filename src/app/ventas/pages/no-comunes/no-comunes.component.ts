import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect Pipe
  nombre: string = 'Adrián';
  genero: string = 'Masculino';

  invitacionMapa = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla',
    'Other': 'invitarle'
  }

  // i18nPlural Pipe
  clientes: string[] = ['Adrián', 'Andrea', 'Carlos Noelia', 'Marc', 'Urbano'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'Femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Adrián',
    edad: 23,
    direccion: 'Aldaia, Valencia'
  }

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async Pipe

  // Recibe como argumento el period?: tipo number o undefined, el scheduler o schedulerLike, y un Observable, que va a estar emitiendo valores numericos
  miObservable = interval(1000); // esto es un observable que va a estar emitiendo valores numericos, 0,1,2,3,4,5,6,7,8,9,10......

  valorPromesa = new Promise((resolve, reject) => { // reject es para si da fallo la promesa.
    setTimeout(() => {
      resolve('Los Datos de la Promesa Han sido Obtenidos Correctamente')
    }, 3500);
  });

}
