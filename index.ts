#! /usr/bin/env node
import inquirer from "inquirer";

const quiz: {
  question_no1: string;
  question_no2: string;
  question_no3: string;
  question_no4: string;
  question_no5: string;
} = await inquirer.prompt([
  {
    name: "question_no1",
    type: "list",
    message:
      "What is the correct way to check if two values are not equal in typescript?",
    choices: ["a == b", "a === b", "a = b", "a!==b"],
  },
  {
    name: "question_no2",
    type: "list",
    message:
      "which of the following characters is commonly allowed in typescript?",
    choices: ["$", "@", "#", "&"],
  },
  {
    name: "question_no3",
    type: "list",
    message:
      "Which operator is commonly used for string concatenation in typescript?",
    choices: ["+", "-", "*", "/"],
  },
  {
    name: "question_no4",
    type: "list",
    message:
      "In typescript, which symbol is commonly used to terminate a statement?",
    choices: [".", ",", ":", ";"],
  },
  {
    name: "question_no5",
    type: "list",
    message:
      "Which method of inquirer.js is used to start the prompt interface and receive user Input?",
    choices: ["start()", "prompt()", "init()", "run()"],
  },
]);
let score: number = 0;
switch (quiz.question_no1) {
  case "a!==b":
    console.log("1. correct!");
    ++score;
    break;
  default:
    console.log("1.Incorrect");
}
switch (quiz.question_no2) {
  case "$":
    console.log("2. correct!");
    ++score;
    break;
  default:
    console.log("2.Incorrect");
}
switch (quiz.question_no3) {
  case "+":
    console.log("3. correct!");
    ++score;
    break;
  default:
    console.log("3.Incorrect");
}
switch (quiz.question_no4) {
  case ";":
    console.log("4. correct!");
    ++score;
    break;
  default:
    console.log("4.Incorrect");
}
switch (quiz.question_no5) {
  case "prompt()":
    console.log("5. correct!");
    ++score;
    break;
  default:
    console.log("5.Incorrect");
}
console.log(`score: ${score}`)
