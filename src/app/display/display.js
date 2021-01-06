let questionHolder = document.getElementById("question-holder")
let nextQuestion = document.getElementById("next-question")
let buttonHolder = document.getElementById("button-holder")

export const displayAfterStart = () => {
  nextQuestion.addEventListener("click", function() {
    questionHolder.style.display = "flex";
    buttonHolder.style.display = "inline";
    nextQuestion.innerText = "Next Question";
  })
};
