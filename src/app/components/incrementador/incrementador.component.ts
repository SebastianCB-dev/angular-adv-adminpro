import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number): void {
    if (this.progreso + valor > 100 || this.progreso + valor < 0) {
      return;
    }
    this.valorSalida.emit(this.progreso += valor);
  }

  onChange(newValue: number) {
    if(newValue >= 100) {
      this.progreso = 100;
    }
    else if(newValue <= 0) {
      this.progreso = 0;
    }
    else {
      this.progreso = newValue;
    }
    this.valorSalida.emit(this.progreso);    
  }
}
