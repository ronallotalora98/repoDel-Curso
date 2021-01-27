import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public titulosub$: Subscription;

  constructor(private router: Router) {
    this.titulosub$ = this.getArgumentosRutas().subscribe(data => {
      this.titulo = data.titulo;
      document.title = `AdminPro - ${data.titulo}`;
    });
  }
  ngOnDestroy(): void {
    this.titulosub$.unsubscribe();
  }

  getArgumentosRutas() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)

    );

  }


}
