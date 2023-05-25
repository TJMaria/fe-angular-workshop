import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'tda-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos: Todo[] = [{id: 0, name: 'todo 1'}, {id: 1, name: 'todo 2'}, {id: 2, name: 'todo 3'}, {id: 3, name: 'todo 4'}]
  trackByFn = (_index: number, todo: Todo) => todo.id; 

}
