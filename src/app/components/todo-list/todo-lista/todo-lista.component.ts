import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-lista',
  templateUrl: './todo-lista.component.html',
  styleUrls: ['./todo-lista.component.css']
})
export class TodoListaComponent implements OnInit {
  @Input() texto: string;
  constructor() { }

  ngOnInit() {
  }

}
