interface IResultCercanos {
    anterior: number;
    siguiente: number;
}

const obtenerCercanosArreglo = (arreglo: number[], valor: number): IResultCercanos => {
    const index = arreglo.indexOf(valor);

    // Si el valor no se encuentra en el arreglo, retornar null
    if (index === -1) {
      return { anterior: null, siguiente: null };
    }
  
    const anterior = index > 0 ? arreglo[index - 1] : null;
    const siguiente = index < arreglo.length - 1 ? arreglo[index + 1] : null;
  
    return { anterior, siguiente };
}

export default obtenerCercanosArreglo;