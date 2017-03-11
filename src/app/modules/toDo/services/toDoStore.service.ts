import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task, iTask} from '../models/task';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/map';

@Injectable()
export class ToDoStore {
    private tasks: [iTask];

    constructor(){

    }
    
    public getTasks(){
        return Observable.from(this.tasks);
    }

    public addTask(title: string) :void{
        this.tasks.push( new Task(title));
    }
}