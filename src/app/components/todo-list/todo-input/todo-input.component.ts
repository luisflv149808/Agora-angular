import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
inputUsuario ='';
  @Output() nuevoTodo = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onEnter(texto: string){
    this.inputUsuario = texto;
    this.nuevoTodo.emit(texto);
    this.inputUsuario = '';
  }

}
