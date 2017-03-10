import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../shared/todo.service';
import {Todo} from "../../shared/models/todo";

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit{
  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todoService.getTodos()
      .then(todos => this.todos = todos);
  }

  onDelete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }
}