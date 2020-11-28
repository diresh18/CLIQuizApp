const chalk = require('chalk');
var readLineSync = require("readline-sync");
var username = readLineSync.question("What is your name? ")
console.log(chalk.yellow("Welcome " + username + " to DO YOU KNOW Diresh"));
console.log("\n")

var score=0;

function play(question, answer) {
  var userAnswer = readLineSync.question(chalk.cyanBright(question));
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
  console.log(chalk.green("You're right!!"));
  console.log("--------------");
  score = score + 1;
  }
else{
  console.log(chalk.redBright("You're wrong!!"));
  console.log("--------------");
  }
}


var questionOne = {
  question:"What is my fullname? ",
  answer:"Diresh Kumar Pradhan",
  }

var questionTwo = { 
  question:"Where do I live? ",
  answer:"Mumbai",
}

var questionThree= {
  question:"What is my favourite sport? ",
  answer: "Cricket",
}

var questionList = [questionOne, questionTwo, questionThree];

for(i=0; i<questionList.length; i++) {
  currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bgGrey("Your Score is: " + score));