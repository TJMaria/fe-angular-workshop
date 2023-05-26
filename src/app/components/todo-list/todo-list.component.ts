import { Component } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'tda-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  adding = false;
  selected: Todo[] = [];

  // Overkill but good exercise
  selected$: BehaviorSubject<Todo[]> = new BehaviorSubject([] as Todo[]);
  canRemove$: Observable<boolean> = this.selected$.pipe(map(sel => sel.length > 0));

  todos: Todo[] = [{ id: 0, name: 'todo 1' }, { id: 1, name: 'todo 2' }, { id: 2, name: 'todo 3' }, { id: 3, name: 'todo 4' }]
  trackByFn = (_index: number, todo: Todo) => todo.id;

  selectTodo(index: number) {
    const todo = this.todos[index];
    const found = !!this.selected.find(t => t === todo);
    const _selected = (found ? this.selected.filter(t => t !== todo) : [todo, ...this.selected]) as Todo[];
    this.updateSelected(_selected);
  }

  private updateSelected(_selected: Todo[] | undefined) {
    this.selected = _selected || [];
    this.selected$.next(this.selected);
  }

  handleAddClick(): void {
    this.adding = true;
  }

  handleRemoveClick(): void {
    this.todos = this.todos.filter(t => !this.selected.includes(t));
    this.updateSelected(undefined);
  }

  handleModalEvent(name?: string): void {
    this.adding = false;
    if (name) {
      const id = ++this.todos.map(t => t.id).sort((a, b) => b - a)[0]
      this.todos.push({ id, name });
    }
  }

}
