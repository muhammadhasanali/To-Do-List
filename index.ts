#! /usr/bin/env node
import inquirer from 'inquirer'

let todos = []
let condition = true

while(condition){
let maketodolist = await inquirer.prompt([
    {
        name: "todo",
        message: "what you want to add in your Todos?",
        type: "input"
    },
    {
        name:"confirmation",
        message:"Do you want to add more?",
        type: "confirm",
        default:"false"
    }
])
    todos.push(maketodolist.todo)
    if(maketodolist.confirmation == false){
        condition = false;
        console.log("Here is your complete to do list:")
        todos.forEach(l => {
            console.log(`- ${l}`)
        });
    }
}

