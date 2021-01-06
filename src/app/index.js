import { accessApi } from "./accessApi";
import { submitAnswer } from "./submitButton"
import { displayAfterStart } from "./display"

import "@styles/main.scss";

const App = () => {
  accessApi();
  submitAnswer();
  displayAfterStart();
};

App();
