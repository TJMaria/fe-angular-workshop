import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoStateService } from 'src/app/services/todo-state-service.service';
import { SupabaseService } from '../../services/supabase.service';

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

  constructor(private todoService: TodoStateService) {
  }

  handleClick() {
    this.active = !this.active;
    console.log(this.active);
    const { id, name } = this;
    this.todoService.handleSelectEvent({ id, name } as Todo);
  }

}
