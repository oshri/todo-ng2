import { ToDoStore  } from './toDoStore.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Task, iTask } from '../models/task';

describe('ToDoStore: Service', () => {
    let storeSrv: ToDoStore;
    let task: iTask;

    beforeEach(() => {
        storeSrv = new ToDoStore();
        task = new Task('new task');
    });

    it('should call addTask', () => {
        let spy = spyOn(storeSrv, 'addTask');
        storeSrv.addTask('new task');

        expect(spy).toHaveBeenCalled()
    });

    it('should add new task', () => {
        spyOn(storeSrv, 'addTask');
        storeSrv.addTask('new task');

        expect(storeSrv.getTasks.length).toBe(0);
    });

    it('should get tasks', () => {
        let tasks = [task];
        spyOn(storeSrv, 'getTasks').and.callFake(() => {
            return Observable.from(tasks);
        });

        expect(storeSrv.getTasks.length).toBe(0);
    });


    
});