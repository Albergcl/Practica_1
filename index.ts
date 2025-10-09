/* EJERCICIO 1 -> 
    Escribe una función recursiva llamada factorialRecursivo que tome un número entero no negativo como argumento y devuelva su factorial. No puedes utilizar bucles (for, while).
*/

const factorialRecursivo = (num: number): number => {

    if(num <= 1){
        return num;
    }

    return num * factorialRecursivo(num - 1);
}

console.log(factorialRecursivo(5)); // Resultado -> 120

/* EJERCICIO 2 -> 
    Escribe una función llamada agruparPeliculasPorGenero que tome un array de objetos representando películas (con propiedades como id, title, genre_ids) y devuelva un objeto donde las claves sean 
    los IDs de género y los valores sean arrays de títulos de películas pertenecientes a ese género.
*/

type Pelicula = {
    id: number,
    title: string,
    genre_ids: number[] //Arrays de IDs de generos
};

const agruparPeliculasPorGenero = (peliculas: Pelicula[]): { [key: number]: string[] } => {
    return peliculas.reduce((acc, pelicula) => {
        pelicula.genre_ids.forEach((genero) => {
            if(!acc[genero]){
                acc[genero] = [];
            }
            acc[genero].push(pelicula.title)
        })
        return acc;
    }, {} as { [key: number]: string[] })
}

const peliculasDePrueba = [
    { id: 1, title: "Película A", genre_ids: [28, 35] },
    { id: 2, title: "Película B", genre_ids: [10749] },
    { id: 3, title: "Película C", genre_ids: [28] }
];

console.log(agruparPeliculasPorGenero(peliculasDePrueba)); // Resultado -> { '28': [ 'Película A', 'Película C' ], '35': [ 'Película A' ], '10749': [ 'Película B' ] }