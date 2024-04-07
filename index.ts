#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
    
let toDos:string[] = [];
let condition:boolean = true;

//      ----------------- Operation in todos list. -----------------

console.log(chalk.yellowBright("__________Welcome to the to-do app!__________"));

while(condition){
    let option =await inquirer.prompt(
        [
            {
                name : "Operators",
                type : "list",
                message : chalk.bgMagentaBright("Select an operation. What would you like to do?"),
                choices : ["Add Task", "Delete Task", "Read Task", "Exit"],
            },
        ],
    );

//      ----------------- Add task in todos list. -----------------

    if(option.Operators === "Add Task"){
        let addTask = await inquirer.prompt(
            [
                {
                    name : "addTodo",
                    type : "input",
                    message : chalk.blueBright("What would you like to add in your todos?"),
                    validate : function(input){
                        if(input.trim() !== ""){
                            return true;
                        }
                        return chalk.bgRed("Please enter a valid task.");
                        }
                }

           ]
           
        ) 
        
        toDos.push(addTask.addTodo);
        condition = addTask.addTodo;
        console.log(chalk.yellowBright("Task added sucessfully!"))
        console.log(chalk.greenBright(toDos));
        
//      ----------------- Delete task in todo list -----------------
         
    }else if (option.Operators === "Delete Task"){
        let deleteTask = await inquirer.prompt(
            [
                {
                    name: "deleteItem",
                    type: "list",
                    message : chalk.yellowBright("Select the item from the to-do list that you want to remove."),
                    choices : toDos,
                            
                }
                
            ]
        );
        let index_to_remove = toDos.indexOf(deleteTask.deleteItem);

        if(index_to_remove >= 0){
            toDos.splice(index_to_remove, 1);
                console.log(chalk.bgRedBright(`to-do item at the list, ${deleteTask.deleteItem} has been successfully removed from the list.`));
                console.log(chalk.greenBright(toDos));
            
                
            }
        }else if(option.Operators === "Read Task"){
            if(toDos.length > 0){
            console.log(chalk.yellowBright("Your to-do list:"));
            toDos.forEach((todo, index) => {
                console.log(chalk.greenBright(`${index+1}. ${todo}`));
            
            });
        }else{
            console.log(chalk.bgRed("Your to-do list is empty!"));
    
        };

//      ----------------- Exiting in todo app -----------------
    

        }else if(option.Operators === "Exit"){
            condition = false;
            console.log(chalk.blueBright("Exiting to-do List Application....."));
            console.log(chalk.yellowBright("\n","__________Thank you for using our to-do app!__________"





        ));
            
        };   
     
    }
