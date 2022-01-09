#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new jsonTodoCollection_1.JsonTodoCollection("suleman", todos);
let showCompleted = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}
let arg = process.argv.splice(2);
if (arg.length > 0) {
    if (arg[0] === "add") {
        if (arg.length >= 2) {
            collection.addTodo(arg[1]);
        }
    }
    else if (arg[0] === "list") {
        displayTodoList();
    }
    else if (arg[0] === "remove") {
        console.log("Removing completed task");
        console.log(collection.getItemCounts().incomplete);
        if (collection.getItemCounts().incomplete > 0) {
            collection.removeComplete();
        }
    }
}
else {
    console.log("Please use commands to use TODO CLI");
}
