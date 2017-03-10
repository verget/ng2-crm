"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var todo_list_component_1 = require("./todo/todo-list/todo-list.component");
var todo_form_component_1 = require("./todo/todo-form/todo-form.component");
var todo_item_component_1 = require("./todo/todo-item/todo-item.component");
var todo_service_1 = require("./shared/todo.service");
var data_service_1 = require("./shared/data.service");
var todo_component_1 = require("./todo/todo.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule,
            app_routing_1.appRouting,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(data_service_1.InMemoryDataService)
        ],
        declarations: [
            app_component_1.AppComponent,
            todo_component_1.TodoComponent,
            todo_list_component_1.TodoListComponent,
            todo_form_component_1.TodoFormComponent,
            todo_item_component_1.TodoItemComponent
        ],
        providers: [todo_service_1.TodoService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map