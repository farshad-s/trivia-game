import { accessApi } from "./accessApi";
import { submitAnswer } from "./submitButton"

import "@styles/main.scss";

const App = () => {
  accessApi();
  submitAnswer();
};

App();
