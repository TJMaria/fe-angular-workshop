import { Component, Input } from '@angular/core';

@Component({
  selector: 'tda-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input()
  id: number = -1;

  @Input()
  name: string = '';

}
