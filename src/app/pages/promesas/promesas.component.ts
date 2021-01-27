import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise((resolve, reject) => {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });
    //   if (false) {

    //     resolve('Hola Mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // })

    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // }).catch(error => console.log('Error en mi promesa', error));
  }

  getUsuarios(){
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
      .then(res => res.json())
      .then(body => resolve(body.data))
    })
  }

}
