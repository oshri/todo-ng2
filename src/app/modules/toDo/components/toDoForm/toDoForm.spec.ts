import { ToDoForm } from './toDoForm.component';

describe('toDoForm: component', () => {
    let toDoFormComponent: ToDoForm;

    beforeEach(() => {
        toDoFormComponent = new ToDoForm();
    });

    it('should input.value to be empty string in first time', () => {
        expect(toDoFormComponent.title).toBeDefined();
        expect(toDoFormComponent.title.length).not.toBeGreaterThan(0);
    });

    it('should not emit event when the input.value is empty', () => {
        let event = null;
        toDoFormComponent.createTask.subscribe(ev => event = ev);
        toDoFormComponent.submit();
        expect(event).toBe(null);
    });

    it('should emit event when the input.value is not empty', () => {
        let event = null;
        toDoFormComponent.createTask.subscribe(ev => event = ev);
        toDoFormComponent.title = 'check input value';
        toDoFormComponent.submit();

        expect(event).toBe('check input value');
    });

    it('should reset title property when call clear function', () => {
        toDoFormComponent.title = 'check input value';
        toDoFormComponent.clear();

        expect(toDoFormComponent.title.length).not.toBeGreaterThan(0);
    });
});