import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso: number = 50;

  constructor() { }

  sumar (valor: number) {
    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
     this.progreso = this.progreso + valor;
  }
  restar (valor: number ) {
    if ( this.progreso <= 0 && valor > 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso - valor;
  }

  ngOnInit() {
  }

}
