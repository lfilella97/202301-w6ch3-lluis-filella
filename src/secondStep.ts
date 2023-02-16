import inquirer from "inquirer";
import { type Game } from "./cases";
import rePlay from "./thirdStep.js";

const secondStep = (examen: Game) => {
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
      console.log(
        firsttep === examen.firstOption.title
          ? examen.firstOption.case
          : examen.secondOption.case
      );
      rePlay();
    })
    .catch((err) => {
      console.error("Unable to save your profile.", err);
    });
};

export default secondStep;
