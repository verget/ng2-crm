import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {appRouting} from "./app.routing";
import {AppComponent} from './app.component';

import {TodoListComponent} from "./todo/todo-list/todo-list.component";
import {TodoFormComponent} from "./todo/todo-form/todo-form.component";
import {TodoItemComponent} from "./todo/todo-item/todo-item.component";

import {TodoService} from "./shared/todo.service";
import {InMemoryDataService} from "./shared/data.service";
import {TodoComponent} from "./todo/todo.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    appRouting,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}