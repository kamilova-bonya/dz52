import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  @Output() addTodo = new EventEmitter<string>(); 
  todoText = ''; 

  onSubmit() {
    if (this.todoText.trim()) {
      this.addTodo.emit(this.todoText); 
      this.todoText = '';
    }
  }
}
