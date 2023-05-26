import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'tda-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  adding = false;

  todos: Todo[] = [{ id: 0, name: 'todo 1' }, { id: 1, name: 'todo 2' }, { id: 2, name: 'todo 3' }, { id: 3, name: 'todo 4' }]
  trackByFn = (_index: number, todo: Todo) => todo.id;

  handleRemoveClick(): void {
    // this.adding = true;
  }

  handleAddClick(): void {
    this.adding = true;
  }

  handleModalEvent(name?: string): void {
    this.adding = false;
    if (name) {
      const id = ++this.todos.map(t => t.id).sort((a, b) => b - a)[0]
      this.todos.push({ id, name });
    }
  }

}
