import { accessApi } from "./accessApi";
import { displayAfterStart } from "./display";
import { start } from "./startQuiz";

import "@styles/main.scss";

const App = () => {
  accessApi();
  displayAfterStart();
  start();
};

App();
