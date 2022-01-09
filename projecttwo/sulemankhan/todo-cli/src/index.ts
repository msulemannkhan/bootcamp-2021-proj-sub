#!/usr/bin/env node

import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import { JsonTodoCollection } from "./jsonTodoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), 
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), 
    new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new JsonTodoCollection("suleman", todos);
let showCompleted = true;

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
        + `(${ collection.getItemCounts().incomplete } items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}


let arg: string[] = process.argv.splice(2);
if (arg.length > 0){
    if (arg[0] === "add"){
        if(arg.length >= 2){
            collection.addTodo(arg[1]);
        }
    }
    else if (arg[0] === "list"){
        displayTodoList()
    }
    else if(arg[0] === "remove"){
        console.log("Removing completed task")
        console.log(collection.getItemCounts().incomplete)
        if (collection.getItemCounts().incomplete > 0){
            collection.removeComplete();
        }
    }
}else{
    console.log("Please use commands to use TODO CLI")
}
