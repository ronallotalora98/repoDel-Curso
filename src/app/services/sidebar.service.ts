import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo:'DashBoard',
      icono:'mdi mdi-gauge',
      subMenu:[
        { titulo:'Main', url:'/'},
        { titulo:'ProgressBar', url:'progress'},
        { titulo:'Grafica', url:'grafica1'},
        { titulo:'Promesas', url:'promesas'},
        { titulo:'Rxjs', url:'rxjs'},


      ]
    }
  ]
  constructor() { }
}
