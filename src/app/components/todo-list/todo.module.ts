import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListaComponent } from './todo-lista/todo-lista.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoInputComponent,
    TodoListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodoListComponent
  ]

  
})
export class TodoModule { }
