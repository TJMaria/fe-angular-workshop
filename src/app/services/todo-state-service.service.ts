import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {
  private selected: Todo[] = [];
  private todos: Todo[] = [{ id: 0, name: 'todo 1' }, { id: 1, name: 'todo 2' }, { id: 2, name: 'todo 3' }, { id: 3, name: 'todo 4' }]


  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject(this.todos);
  selected$: BehaviorSubject<Todo[]> = new BehaviorSubject([] as Todo[]);
  hasSelection$: Observable<boolean> = this.selected$.pipe(map(sel => sel.length > 0));

  handleSelectEvent(todo: Todo) {
    const found = !!this.selected.find(t => t === todo);
    const _selected = (found ? this.selected.filter(t => t !== todo) : [todo, ...this.selected]) as Todo[];
    this.updateSelected(_selected);
  }

  handleRemove() {
    console.log('remove');
    this.updateTodos(this.todos.filter(t => !this.selected.map(s => s.id).includes(t.id)))
    this.updateSelected([]);
  }

  handleAdd(name: string){
    const id = ++this.todos.map(t => t.id).sort((a, b) => b - a)[0]
    this.updateTodos([{ id, name }, ...this.todos])
  }

  private updateSelected(_selected: Todo[]) {
    this.selected = _selected;
    this.selected$.next(this.selected);
  }
  
  private updateTodos(_todos: Todo[]) {
    this.todos = _todos;
    this.todos$.next(this.todos);
  }

}
