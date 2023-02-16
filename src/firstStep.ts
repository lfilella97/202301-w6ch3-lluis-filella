import inquirer from "inquirer";
import { type Game } from "./cases.js";
import secondStep from "./secondStep.js";

const firstStep = (examen: Game) => {
  inquirer
    .prompt([
      {
        name: "firsttep",
        type: "list",
        message: examen.case,
        choices: [examen.firstOption.title, examen.secondOption.title],
      },
    ])
    .then((firsttep: string) => {
      secondStep(
        firsttep === examen.firstOption.title
          ? (examen.firstOption as unknown as Game)
          : (examen.secondOption as unknown as Game)
      );
    })
    .catch((err) => {
      console.error("Unable to save your profile.", err);
    });
};

export default firstStep;
