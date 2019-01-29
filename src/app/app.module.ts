import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VotingAppComponent } from './components/voting-app/voting-app.component';
import { TodoModule } from './components/todo-list/todo.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes =[
{path: 'todo-app', component: TodoListComponent},
{path: 'voting-app', component: VotingAppComponent},
{path: '', redirectTo: '/todo-app', pathMatch: 'full'},
{path: '**', component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    VotingAppComponent,
    
  ],
  imports: [
    BrowserModule,
    TodoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
