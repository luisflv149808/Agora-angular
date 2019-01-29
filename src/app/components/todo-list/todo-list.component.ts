import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
titleComponent = 'Todo App';
  test:string[] = [];
  constructor() { }

  ngOnInit() {
  }
  nuevoTodo(todo: string){
    console.log(todo);
    this.test.push(todo);
  }
}
