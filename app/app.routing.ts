import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';


const appRoutes = [
    {path: '', component: TodoComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);