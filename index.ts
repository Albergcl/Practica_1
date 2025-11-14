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

/* EJERCICIO 3 ->
    Escribe una función asíncrona llamada obtenerTitulosDePosts que realice las siguientes acciones:

    1. Utiliza fetch para obtener los datos de la siguiente URL: https://jsonplaceholder.typicode.com/posts.
    2. Maneja posibles errores durante la petición utilizando bloques try...catch.
    3. Extrae el título (title) de cada post en el array resultante.
    4. Devuelve un array con los títulos extraídos.
*/

const obtenerTitulosDePosts = async (): Promise<string[]> => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);

        if (!response) {
            console.log("Error en la petición.");
        }

        const data = await response.json();
        const titulos = data.map((elem: { title: string }) => {
            return elem.title;
        });
        return titulos;
    } catch (error) {
        console.log("Error al obtener los posts: ", error);
        throw error;
    }
}
 
// Ejemplo de uso:
obtenerTitulosDePosts()
  .then(titulos => {
    console.log(`Títulos de los posts: ${titulos}`);
  })
  .catch(error => {
    console.error(`Error al obtener los títulos: ${error}`);
  });
 
// Ejemplo con async/await (opcional, para practicar):
async function ejecutarObtenerTitulos() {
  try {
    const titulos = await obtenerTitulosDePosts();
    console.log(`Títulos de los posts (con async/await): ${titulos}`);
  } catch (error) {
    console.error(`Error al obtener los títulos (con async/await): ${error}`);
  }
}
 
ejecutarObtenerTitulos();