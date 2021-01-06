let answers = document.getElementsByName("answer");

export const disableAnswers = () => {
  answers[0].disabled = false;
  answers[1].disabled = false;
  answers[2].disabled = false;
  answers[3].disabled = false;
}

export const enableAnswers = () => {
  answers[0].disabled = true;
  answers[1].disabled = true;
  answers[2].disabled = true;
  answers[3].disabled = true;
}