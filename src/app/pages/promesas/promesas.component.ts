import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then ( (msj) => {
      console.log('Termino con exito la cuenta', msj );
    }).catch((error) => {
      console.log('Hubo un error al contar', error);
    });
  }
  contarTres () : Promise<boolean> {
    return new Promise((resolve , reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        if( contador === 3 ) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
  ngOnInit() {
  }

}
