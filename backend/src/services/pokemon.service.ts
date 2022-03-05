import { IPokemon } from './../models/pokemon.model';
import Pokemon from "../models/pokemon.model";

//Definimos funciones para hacer queries a la base de datos y manejar los posibles errores
//Get all books
export async function getAllPokemons() {
  return Pokemon.find().catch((error : any) => {
    console.error("Error encontrando pokemons", error);
  });
}


//Get a book for id :
export async function getPokemon(pokemonId: string) {
//Devolvemos un libro con un id determinado 
  return Pokemon.findById(pokemonId).catch((error : any) => {
    console.error("Error encontradndo pokemon con id: " + pokemonId, error);
  });
}


//Update a book
export async function updatePokemon(pokemon: IPokemon, pokemonId: string) {
    //pasamos un filtro para la base de datos primero en este caso es el id del libro que queremos cambiar 
    //lo segundo es un objeto con las propiedades que queramos cambiar en este caso enviaremos todo un libro pero podría ser solo el nombre por ejemplo
  return Pokemon.findByIdAndUpdate(
    pokemonId,
    pokemon, { useFindAndModify: false } 
  )
    .then((result : any) => {
        console.log("Pokemon actualizado"); 
    })
    .catch((error : any) => {
      console.error("Error borrando libro con id: " + pokemonId, error);
    });
}
