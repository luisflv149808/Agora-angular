import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/shared/ruta';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  rutas: Ruta[] = [
    { texto: 'todo app',url: '/todo-app'},
    { texto: 'votacion memes',url: '/voting-app'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
