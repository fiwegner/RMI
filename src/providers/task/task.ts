import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aufgabe } from '../../aufgabe';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {

    taskList: Aufgabe[] = [
    {
        bez: 'Abwasch',
        detail: 'test'
    },
    {
        bez: 'Meeting',
        detail: 'easdrftgjk'
    }
    ]

  constructor(public http: HttpClient) {
    this.getTaskList();
  }
  
  getTaskList() {
    if(localStorage.getItem('aufgabe')) {
        this.taskList = JSON.parse(localStorage.getItem('aufgabe'));
    }
    return this.taskList;
  }
  
  add(task: Aufgabe) {
    this.taskList.push(task);
    localStorage.setItem('aufgabe', JSON.stringify(this.taskList));
  }
  
  wipe() {
    localStorage.clear();
  }

}
