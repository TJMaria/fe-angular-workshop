import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {
  private selected: Todo[] = [];
  private todos: Todo[] = [];

  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject(this.todos);
  selected$: BehaviorSubject<Todo[]> = new BehaviorSubject([] as Todo[]);
  hasSelection$: Observable<boolean> = this.selected$.pipe(map(sel => sel.length > 0));

  constructor(private supabaseService: SupabaseService) {
  }

  public getTodos() {
    this.supabaseService.fetchTodos().subscribe((todos) => this.updateTodos(todos));
  }

  handleSelectEvent(todo: Todo) {
    const found = !!this.selected.find(t => t === todo);
    const _selected = (found ? this.selected.filter(t => t !== todo) : [todo, ...this.selected]) as Todo[];
    this.updateSelected(_selected);
  }

  handleRemove() {
    Promise.all(this.selected.map(({ id }) => this.supabaseService.deleteTodo(id))).then(() => {
      this.updateTodos(this.todos.filter(t => !this.selected.map(s => s.id).includes(t.id)));
      this.updateSelected([]);
    });
  }

  handleAdd(name: string) {
    this.supabaseService.addTodo(name).then(({ error }) => {
      if (!error) {
        this.getTodos();
      }
    });
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
