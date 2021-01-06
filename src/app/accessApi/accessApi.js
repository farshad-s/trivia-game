import { enableAnswers, disableAnswers } from "../toggleAnswer/toggleAnswer.js"

let endpoint =
  "https://opentdb.com/api.php?amount=30&category=9&difficulty=easy&type=multiple";

let question = document.getElementById("question");
let nextQuestion = document.getElementById("next-question");
let answerOne = document.getElementById("answer-1");
let answerTwo = document.getElementById("answer-2");
let answerThree = document.getElementById("answer-3");
let answerFour = document.getElementById("answer-4");
let answers = document.getElementsByName("answer");
let score = document.getElementById("score");

export const accessApi = () => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      let num = 0;
      nextQuestion.addEventListener("click", function() {
        question.innerText = data.results[num].question
        let firstAnswer = data.results[num].incorrect_answers[0]
        let secondAnswer = data.results[num].incorrect_answers[1]
        let thirdAnswer = data.results[num].incorrect_answers[2]
        let fourthAnswer = data.results[num].correct_answer
        let array = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer]
        disableAnswers();
        num++;

        let counter = array.length;
        while (counter > 0) {
          let index = Math.floor(Math.random() * counter);
          counter--;
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
          answerOne.innerText = array[0]
          answerTwo.innerText = array[1]
          answerThree.innerText = array[2]
          answerFour.innerText = array[3]
        }
      })
      for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(){
          if (answers[i].innerText === data.results[num].correct_answer) {
          score.innerText++;
          num++;
          answers[i].style.backgroundColor = "green";
        } else {
          num++;
          answers[i].style.backgroundColor = "red";
        } enableAnswers();
        })
      }
      })
    .catch((error) => {
    console.log("error is", error);
  });
};
