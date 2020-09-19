
import { TodoService } from './todo.service'
import {Observable} from 'rxjs/Observable';
import any = jasmine.any;

export class TodosComponent {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe( (t: any []) => this.todos = t );
  }

  add() {
    let newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }
}
