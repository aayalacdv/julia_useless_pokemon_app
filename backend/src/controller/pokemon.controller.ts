import { IPokemon } from "../models/pokemon.model";
import { Request, Response } from "express";
import { getAllPokemons, getPokemon, updatePokemon } from "../services/pokemon.service";
import pokemonRoutes from "../../routes/pokemon.routes";

//el controlador es otro fichero donde separamos más la lógica de la app, en este caso lidiamos con las peticiones del cliente
//pasamos los objetos de request y response para poder responder a cada peticion del cliente

export async function getAllHandler(req: Request, res: Response) {
  const results = await getAllPokemons().catch((error) =>
    res.status(404).send({ mensaje: "error :(" })
  );

  return res.send(results).status(200);
}

export async function getTwoRandomHandler(req: Request, res: Response) {
  const pokemons: IPokemon[] = await getAllPokemons().catch((error) => {
    return res.send({ mensaje: "Error encontrando pokemons" }).status(404);
  });

  const pokemon1 = pokemons[Math.floor(Math.random() * pokemons.length)];
  const pokemon2 = pokemons[Math.floor(Math.random() * pokemons.length)];

  return res.send({ pokemon1: pokemon1, pokemon2: pokemon2 }).status(200);
}

export async function updateOneHandler(req: Request, res: Response) {
  const id = req.params.id;
  const pokemon = req.body as IPokemon;
  await updatePokemon(pokemon, id)
    .then((result: any) => {
      if (result) res.status(200).json(result);
      res.status(404).send({ mensaje: "Pokemon no encontrado" });
    })
    .catch((error) => res.status(500).send(error));
}
