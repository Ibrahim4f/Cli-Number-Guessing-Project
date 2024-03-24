#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Kindly Guess a number Between 1 to 6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Gessed a right Number");
}
else {
    console.log("You Guessed wrong Number");
}
