import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todoList = new FormGroup({
    todo: new FormArray([])
  });

  addTodo(item: HTMLInputElement){
    this.topics.push(new FormControl(item.value));
    item.value = '';
  }

  todoDone(list){
    let index = this.topics.controls.indexOf(list);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.todoList.get('todo') as FormArray;
  }

}
