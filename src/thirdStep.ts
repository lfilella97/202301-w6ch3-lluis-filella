import inquirer from "inquirer";
import { case1 } from "./cases.js";
import firstStep from "./firstStep.js";
import runQuestions from "./start.js";

const rePlay = () => {
  inquirer
    .prompt([
      {
        name: "answer",
        type: "confirm",
        message: "¿No salio muy bien la jugada, quieres volver a probar?",
      },
    ])
    .then((answer) => {
      if (answer) {
        return;
      }

      firstStep(case1);
    })
    .catch((err) => {
      console.error("Unable to save your profile.", err);
    });
};

export default rePlay;
