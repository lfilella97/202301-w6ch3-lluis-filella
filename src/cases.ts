export const case1 = {
  title: "",
  case: "Entras en clase y te das cuenta de que hoy hay un examen sorpresa de programación web.",
  firstOption: {
    title: "Comenzar a hacer el examen sin ayuda.",
    case: "Comienzas a hacer el examen sin ayuda y rápidamente te das cuenta de que no recuerdas la sintaxis de algunas funciones clave.",
    firstOption: {
      title: "Buscar rápidamente la información en línea.",
      case: "Intentas buscar la información en línea, pero la conexión a Internet es lenta y no puedes encontrar la respuesta a tiempo.",
      firstOption: "EL JUEGO HA TERMINADO PULSA CONTROL C PARA SALIR",
      secondOption: "EL JUEGO HA TERMINADO PULSA CONTROL C PARA SALIR",
    },
    secondOption: {
      title: "Dejar en blanco y pasar al siguiente problema.",
      case: "Dejas el problema en blanco y pasas al siguiente, pero el tiempo se acaba y no logras terminar el examen.",
      firstOption: "EL JUEGO HA TERMINADO PULSA CONTROL C PARA SALIR",
      secondOption: "EL JUEGO HA TERMINADO PULSA CONTROL C PARA SALIR",
    },
  },
  secondOption: {
    title: "Pedir ayuda al profesor.",
    case: "Le pides ayuda al profesor, pero él está ocupado con otro alumno y no puede atederte.",
    firstOption: {
      title: "Esperar a que el profesor termine con el otro alumno.",
      case: "Esperas a que el profesor termine con el otro alumno, pero el tiempo se agota y no logras terminar el examen.",
      firstOption: "EL JUEGO HA TERMINADO PULSA CONTROL C PARA SALIR",
      secondOption: "EL JUEGO HA TERMINADO PULSA CONTROL C PARA SALIR",
    },
    secondOption: {
      title: "Pedir ayuda a un compañero de clase.",
      case: "Un compañero de clase te ayuda, pero te das cuenta de que él tiene una forma diferente de resolver los problemas y terminas confundido, lo que te lleva a obtener una mala calificación.",
      firstOption: "EL JUEGO HA TERMINADO PULSA CONTROL C PARA SALIR",
      secondOption: "EL JUEGO HA TERMINADO PULSA CONTROL C PARA SALIR",
    },
  },
};

export type Game = typeof case1;

export const lastCases = [
  "Entras en clase y te das cuenta de que hoy hay un examen sorpresa de programación web.",
  "Comienzas a hacer el examen sin ayuda y rápidamente te das cuenta de que no recuerdas la sintaxis de algunas funciones clave.",
  "Intentas buscar la información en línea, pero la conexión a Internet es lenta y no puedes encontrar la respuesta a tiempo.",
  "Dejas el problema en blanco y pasas al siguiente, pero el tiempo se acaba y no logras terminar el examen.",
  "Le pides ayuda al profesor, pero él está ocupado con otro alumno y no puede atederte.",
  "Esperas a que el profesor termine con el otro alumno, pero el tiempo se agota y no logras terminar el examen.",
  "Un compañero de clase te ayuda, pero te das cuenta de que él tiene una forma diferente de resolver los problemas y terminas confundido, lo que te lleva a obtener una mala calificación.",
];
