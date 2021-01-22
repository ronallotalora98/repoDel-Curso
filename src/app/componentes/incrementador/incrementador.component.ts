import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent {

  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  get getPorsentaje() {
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number) {
    if (this.progreso == 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso == 0 && valor <= 0) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(valor: number) {
    if (this.progreso >= 100) {
      this.progreso = 100;
    } else if (this.progreso <= 0) {
      this.progreso = 0;
    }else {
      this.progreso = valor;
    }


    this.valorSalida.emit(this.progreso);
  }

}
