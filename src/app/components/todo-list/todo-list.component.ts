import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoStateService } from 'src/app/services/todo-state-service.service';

@Component({
  selector: 'tda-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  adding = false;
  trackByFn = (_index: number, todo: Todo) => todo.id;

  constructor(public todoService: TodoStateService) {
  }

  handleAddClick(): void {
    this.adding = true;
  }

  handleModalEvent(name?: string): void {
    this.adding = false;
    if (name) {
      console.log('add', name);
      this.todoService.handleAdd(name);
    }
  }

}
