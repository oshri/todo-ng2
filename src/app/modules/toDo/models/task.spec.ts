import { Task, iTask } from './task';

describe('Task', () => {
    let task: iTask;

    beforeEach(() => {
        task = new Task('new task');
    });

    it('should create new task with currect values', () => {
        expect(task.title).toBe('new task');
        expect(task.completed).toBeFalsy();
    });

    it('should key be uniq', () => {
        const task1key = new Task('task 1').key;
        const task2key = new Task('task 2').key;
        expect(task1key != task2key).toBeTruthy();
    })
});