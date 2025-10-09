// EJERCICIO 1 -> Escribe una función recursiva llamada factorialRecursivo que tome un número entero no negativo como argumento y devuelva su factorial. No puedes utilizar bucles (for, while).

const factorialRecursivo = (num: number): number => {

    if(num <= 1){
        return num;
    }

    return num * factorialRecursivo(num - 1);
}

console.log(factorialRecursivo(5)); // Resultado -> 120