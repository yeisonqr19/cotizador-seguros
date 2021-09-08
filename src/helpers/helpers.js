export const obtenerDiferenciaYear = (year) =>
  new Date().getFullYear() - parseInt(year, 10);

//Obtener la diferencia cuando aumente, dependiendo de la marca del auto:
export const obtenerDiferenciaMarca = (marca) => {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;

    case "americano":
      incremento = 1.15;
      break;

    case "asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }

  return incremento;
};

//Calcular el tipo de Seguro:

export const obtenerPlan = (plan) => (plan === "basico" ? 1.2 : 1.5);

//Funcion Uppercase
export const primeraMayuscula = (texto) =>
  texto.charAt(0).toUpperCase() + texto.slice(1);
