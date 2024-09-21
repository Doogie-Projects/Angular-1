import { Component } from '@angular/core';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styleUrls: ['./padre2.component.css']
})
export class Padre2Component {

  mensajeRecibido: string = '';

  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }

  valorContador: number = 0;
  mensajePadre: string = 'Mensaje dede el padre';

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }
}
