import inquirer from "inquirer";
import gradient from "gradient-string";
import figlet from 'figlet';

// Wait for user input
const answers: {
    numOne: number
    numTwo: number
    operator: string

} = await inquirer.prompt([
    {
    type: "number",
    name: "numOne",
    message: "Pehla Number Batao: "
    },
    {
    type: "number",
    name: "numTwo",
    message: "Dosra bhi batado bhai: "
    },
    {
    type: "list",
    choices: ["*", "+", "-", "/"],    
    name: "operator",
    message: "Select Operatoe: "
    },
])


const { numOne, numTwo, operator } = answers;
if (numOne && numTwo && operator) {
    let result: number = 0
    if (operator === "+") {
        result = numOne + numTwo
    } else  if (operator === "-") {
        result = numOne - numTwo
    }  if (operator === "/") {
        result = numOne / numTwo
    }  if (operator === "*") {
        result = numOne * numTwo
    } 

    console.log(figlet.textSync('Jawab hai: ' + result));
    
} else {
    console.log(gradient.rainbow("Bhaya pehle socho phir samjo aur phir likho"));
    
}