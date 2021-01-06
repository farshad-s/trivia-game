import { accessApi } from "./accessApi";
import { displayAfterStart } from "./display"

import "@styles/main.scss";

const App = () => {
  accessApi();
  displayAfterStart();
};

App();
