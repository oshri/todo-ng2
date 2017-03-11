import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToDo } from './components/toDo/toDo.component';
import { ToDoList } from './components/toDoList/toDoList.component';
import { ToDoIteam } from './components/toDoIteam/toDoIteam.component';
import { ToDoForm } from './components/toDoForm/toDoForm.component';
import { AutoFocusDirective } from './directives/autoFocus.directive';
import { ToDoStore } from './services/toDoStore.service';

@NgModule({
    declarations:[
        ToDo,
        ToDoList,
        ToDoIteam,
        ToDoForm,
        AutoFocusDirective
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        ToDo,
        ToDoList,
        ToDoIteam,
        ToDoForm
    ],
    providers: [ ToDoStore ]
})
export class ToDoModule{}