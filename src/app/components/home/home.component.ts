import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import {FormsModule} from '@angular/forms';

export interface TodoItem {
  id:number;
  task:string;
  completed:boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,NgFor,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  todoList : TodoItem [] = [];
  newTask : string = ''
  

  addTask():void{
    if(this.newTask.trim() !== ''){
      const newTodoItem : TodoItem = {
        id : Date.now(),
        task : this.newTask,
        completed:false
      }

      this.todoList.push(newTodoItem)
      this.newTask = ''
    }
  }

   toggleCompleted(index :number):void{
    this.todoList[index].completed = !this.todoList[index].completed
  }

  deleteTask(id:number):void{
    this.todoList = this.todoList.filter(item => item.id !== id)
    console.log(this.todoList);
  }
}
