import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../shared/models/todo';
@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent{
  @Input() todo : Todo;
  @Output() deleteEvent = new EventEmitter();
  @Output() toggle = new EventEmitter();

  onToggle() {
    this.toggle.emit(this.todo);
  }

  deleteItem() {
    this.deleteEvent.emit(this.todo);
  }
}