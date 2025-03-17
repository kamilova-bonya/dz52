import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { Todo } from './models/todo.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];
  nextId = 1;

  addTodo(text: string) {
    this.todos.push({
      id: this.nextId++, text,
      completed: false
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}