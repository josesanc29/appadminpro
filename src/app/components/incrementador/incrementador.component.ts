import { Component, OnInit, Input, Output, EventEmitter,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild ('txtproceso') txtproceso: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  sumar (valor: number) {
    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
     this.progreso = this.progreso + valor;
     this.cambioValor.emit(this.progreso);
  }

  restar (valor: number ) {
    if ( this.progreso <= 0 && valor > 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso - valor;
    this.cambioValor.emit(this.progreso);
  }
  progesoCambia(event: number){

  // const elemHtml: any = document.getElementsByName('progreso')[0];

   if ( event >= 100 ) {
     this.progreso = 100;
   } else if ( event <= 0 ) {
     this.progreso = 0;
   } else {
     this.progreso = event;
   }
   this.txtproceso.nativeElement.value = this.progreso;
   this.cambioValor.emit(this.progreso);
   this.txtproceso.nativeElement.focus();
  }

  ngOnInit() {
  }

}
