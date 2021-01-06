let apiRoot = document.getElementById("api-root")
let nextQuestion = document.getElementById("next-question")
let submitButton = document.getElementById("submit-button");
let buttonHolder = document.getElementById("button-holder")

export const displayAfterStart = () => {
  nextQuestion.addEventListener("click", function() {
    apiRoot.style.display = "inline";
    submitButton.style.display = "inline";
    buttonHolder.style.display = "inline";
    nextQuestion.innerText = "Next Question";
  })
};
