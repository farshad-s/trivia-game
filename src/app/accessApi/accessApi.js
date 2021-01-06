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
        answerOne.innerText = data.results[num].incorrect_answers[0]
        answerTwo.innerText = data.results[num].incorrect_answers[1]
        answerThree.innerText = data.results[num].correct_answer
        answerFour.innerText = data.results[num].incorrect_answers[2]
        
        answers[0].disabled = false;
        answers[1].disabled = false;
        answers[2].disabled = false;
        answers[3].disabled = false;
      }) 
      for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener("click", function(){
          if (answers[i].innerText === data.results[num].correct_answer) {
          score.innerText++;
          num++;
        } else {
          num++;
        } answers[0].disabled = true;
          answers[1].disabled = true;
          answers[2].disabled = true;
          answers[3].disabled = true;
        })
      }
      })
    .catch((error) => {
    console.log("error is", error);
  });
};
