let submitButton = document.getElementById("submit-button");
let answers = document.getElementsByName("answer");
let score = document.getElementById("score");

export const submitAnswer = () => {
for (let i = 0; i < answers.length; i++) {
  submitButton.addEventListener("click", function() {
    if (answers[i].checked == true) {
      score.innerText = parseFloat(score.innerText) + 1;
      answers[i].checked = false;
    }
  })
}};