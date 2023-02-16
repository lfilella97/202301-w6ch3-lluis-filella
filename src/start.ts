import inquirer from "inquirer";
import { case1 } from "./cases.js";
import firstStep from "./firstStep.js";

const runQuestions = () => {
  inquirer
    .prompt([
      {
        name: "nick",
        type: "input",
        message: "¿Cual es tu nombre?",
      },
      {
        name: "profession",
        type: "confirm",
        message: "¿Quieres jugar a un juego?",
      },
      {
        name: "profession",
        type: "confirm",
        message: "?que¿",
      },
    ])
    .then(() => {
      firstStep(case1);
    })
    .catch((err) => {
      console.error("Unable to save your profile.", err);
    });
};

export default runQuestions;
