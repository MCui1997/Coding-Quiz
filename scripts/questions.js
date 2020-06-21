// using dom, need to create the template for all questions
// just used 10 questions from w3 schools
//Final working version

var questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answer: "<script>"
  },

  {
    title: "Where is the correct place to insert a JavaScript?",
    choices: ["<head> section", "<body> section", "both", "neither"],
    answer: "both"
  },

  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers",
      "strings",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },

  {
    title: "How do you write Hello World in an alert box?",
    choices: [
      "msg(Hello World)",
      "alert(Hello World)",
      "alertBox(Hello World)",
      "msgBox(Hello World)"
    ],
    answer: "alert(Hello World)"
  },

  {
    title:
      "How do you call a function named myFunction?",
    choices: ["myFunction()", "call myFunction", "call function myFunction()"],
    answer: "myFunction()"
  },

  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Git Bash", "Terminal", "console.log"],
    answer: "console.log"
  },

  {
    title:
      "When trying to print through an array, a great method of doing so is __",
    choices: ["for loop", "push method", "timeout function", "alert"],
    answer: "for loop"
  },

  {
    title:
      "The external JavaScript file must contain the <script> tag.",
    choices: ["True","False"],
    answer: "False"
  },

  {
    title:
      "How to write an IF statement in JavaScript?",
    choices: ["if i=5 then","if (i==5)", "if i==5 then", "if i=5"],
    answer: "if (i==5)"
  },

  {
    title:
      "How does a WHILE loop start?",
    choices: ["while (i <=10); i++","while(i<=10)", "while i=1 to 10"],
    answer: "while(i<=10)"
  },

];
