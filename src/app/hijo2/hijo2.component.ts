import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {

  @Input() recibeHijo2: string = '';

  @Output() mensajeDesdeHijo2 = new EventEmitter<string>();

  mensaje: string = '';


  enviarMensaje() {
    this.mensajeDesdeHijo2.emit(this.mensaje);
  }

}
