import { Component, OnDestroy, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';
import { Observable, interval, Subscription } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;
  constructor() {


    // this.retornaObservable().pipe(
    //   retry()
    // ).subscribe(valor => console.log(valor),
    //   error => console.warn(error),
    //   () => console.info('obs termino')
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe(valor => {
      console.log(valor)
    })
  }
  ngOnDestroy(): void {
    this,this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {

  }

  retornaIntervalo(): Observable<number> {
    const intervalo$ = interval(100).pipe(
      // take(10),
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0) ? true : false),
    );
    return intervalo$;
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    const obj$ = new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego a 2');
        }
      });
    });
    return obj$;
  }

}
