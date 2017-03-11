import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'to-do-form',
    styleUrls: ['toDoForm.component.scss'],
    templateUrl: 'toDoForm.component.html'
})

export class ToDoForm {

    @Output() createTask = new EventEmitter(false);

    title: string = '';

    clear(): void {
        this.title = '';
    }

    submit(): void {
        const title: string = this.title.trim();
        if (title.length) {
            this.createTask.emit(title);
        }
        this.clear();
    }
}