import { Component, OnInit } from '@angular/core';
import { ToDoStore } from '../../services/toDoStore.service';
import { Observable } from 'rxjs/Observable';
import { iTask } from '../../models/task';

@Component({
    selector: 'to-do',
    styleUrls:['toDo.component.scss'],
    templateUrl: 'toDo.component.html'
})

export class ToDo implements OnInit{
    public tasks: Observable<any>;

    constructor(
        private store: ToDoStore
    ){
        this.tasks = this.store.getTasks.subscrib
    }

    ngOnInit(){

    }

    create(event){
        this.store.addTask(event);
        console.log("createTask Event:", event);   
    }
}
