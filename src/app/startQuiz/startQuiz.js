let nextQuestion = document.getElementById("next-question");
let questionHolder = document.getElementById("question-holder");

export const start = () => {
  nextQuestion.addEventListener("click", function() {
    questionHolder.style.display = "flex";
    nextQuestion.style.display = "inline";
    nextQuestion.innerText = "Next Question"
  })
}