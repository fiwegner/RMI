import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Aufgabe } from '../../aufgabe';
import { TaskProvider } from '../../providers/task/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    taskList: Aufgabe[];
    newTask: Aufgabe = {
        bez: 'Peter',
        detail: 'gibts nicht'
    };

  constructor(public navCtrl: NavController, public taskProvider: TaskProvider) {
    this.taskList = this.taskProvider.getTaskList();
  }
    
    add() {
        this.taskProvider.add(this.newTask);
    }
    
    wipe() {
        this.taskProvider.wipe();
        location.reload();
    }
}
