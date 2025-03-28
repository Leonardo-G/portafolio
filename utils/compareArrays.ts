import { ITecnologia } from '../interface/proyectos';

export const compareArrays = (
  array1: ITecnologia[],
  array2: ITecnologia[],
): boolean => {
  const array = [] as ITecnologia[];

  if (array2.length === 0) return false;

  //Generar un nuevo array para las tecnologías que coincidan
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] === array1[i]) {
        array.push(array2[j]);
      }
    }
  }

  // Verificar si los arreglos tienen la misma longitud
  if (array.length !== array2.length) {
    return false;
  }

  // Iterar sobre los elementos del primer arreglo
  for (let i = 0; i < array.length; i++) {
    // Verificar si el elemento actual no está presente en el segundo arreglo
    if (!array2.includes(array[i])) {
      return false;
    }
  }

  console.log(array);
  console.log(array.length > 0);
  return array.length > 0;
};
