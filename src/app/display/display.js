let apiRoot = document.getElementById("api-root")
let nextQuestion = document.getElementById("next-question")
let submitButton = document.getElementById("submit-button");

export const displayAfterStart = () => {
  nextQuestion.addEventListener("click", function() {
    submitButton.style.display = "inline";
    apiRoot.style.display = "inline";
    nextQuestion.innerText = "Next Question"
  })
};
