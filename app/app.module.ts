import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

import {AppComponent} from './app.component';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {TodoItemComponent} from "./todo-item/todo-item.component";

import {TodoService} from "./shared/todo.service";
import {InMemoryDataService} from "./shared/data.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}