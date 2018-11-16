import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber, Subscription } from 'rxjs';
import { retry, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscribiste: Subscription;

  constructor() {

    this.subscribiste = this.observableContar().subscribe( (numero) => {
      console.log('Subscrito', numero);
    },
    (error) => {
      console.log('Error', error);
    },
    () => {
      console.log('El observable termino su funcion');
    });
  }

  observableContar(): Observable<any> {
     return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador ++;
        const salida = {
          valor: contador
        }
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(contador);
        //   observer.complete();
        // }
        // if (contador === 2 ) {
        //   // clearInterval(contador);
        //   observer.error('Se ha producido un error');
        // }
      }, 1000);
    }).pipe( map (resp => resp.valor),
             filter ( ( valor , index) => {
              if (( valor % 2 === 1)) {
                // valor es impar
                return true;
              } else {
                // valor es par
                return false;
              }
             }) );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('vas a abandonar el componente....');
    this.subscribiste.unsubscribe();
  }
}
