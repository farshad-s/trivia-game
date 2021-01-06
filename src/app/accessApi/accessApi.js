let endpoint =
  "https://opentdb.com/api.php?amount=30&category=9&difficulty=easy&type=multiple";

let question = document.getElementById("question")

export const accessApi = () => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      question.innerText = data.results[0].question
    })
    .catch((error) => {
      console.log("error is", error);
    });
};
