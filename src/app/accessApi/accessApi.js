let endpoint =
  "https://opentdb.com/api.php?amount=30&category=9&difficulty=easy&type=multiple";

let question = document.getElementById("question")
let nextQuestion = document.getElementById("next-question")

export const accessApi = () => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      let num = 0;
      nextQuestion.addEventListener("click", function() {
        question.innerText = data.results[num].question  
        num++;
      })
    })
    .catch((error) => {
      console.log("error is", error);
    });
};
