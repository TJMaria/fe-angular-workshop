import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  active = false;

  @Output()
  clicked: EventEmitter<void> = new EventEmitter();

  handleClick() {
    this.active = !this.active;
    console.log(this.active);
    this.clicked.emit();
  }

}
