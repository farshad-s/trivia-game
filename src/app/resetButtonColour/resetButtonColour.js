let answers = document.getElementsByName("answer")
let nextQuestion = document.getElementById("next-question")

export const resetButtonColour = () => {
  nextQuestion.addEventListener("click", function() {
    for (let i = 0; i < answers.length; i++) {
      answers[i].style.backgroundColor = "transparent";
    }
  })
}