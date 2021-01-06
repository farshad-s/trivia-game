let endpoint =
  "https://opentdb.com/api.php?amount=30&category=9&difficulty=easy&type=multiple";

let question = document.getElementById("question")
let nextQuestion = document.getElementById("next-question")
let submitButton = document.getElementById("submit-button");
let answerOne = document.getElementById("answer-1")
let answerTwo = document.getElementById("answer-2")
let answerThree = document.getElementById("answer-3")
let answerFour = document.getElementById("answer-4")

let apiRoot = document.getElementById("api-root")
let answers = document.getElementsByName("answer");

export const accessApi = () => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      let num = 0;
      nextQuestion.addEventListener("click", function() {
        submitButton.style.display = "inline";
        apiRoot.style.display = "inline";
        nextQuestion.innerText = "Next Question"
        question.innerText = data.results[num].question
        answerOne.innerText = data.results[num].incorrect_answers[0]
        answerTwo.innerText = data.results[num].incorrect_answers[1]
        answerThree.innerText = data.results[num].correct_answer
        answerFour.innerText = data.results[num].incorrect_answers[2]
        num++;
        for (let i = 0; i < answers.length; i++) {
          answers[i].checked = false;
        }
      })
    })
    .catch((error) => {
      console.log("error is", error);
    });
};
