import  fetch  from 'node-fetch';
import config from "config";
import express from "express";
import routes from "../routes/routes";
import connect from "./connection/connect";
import cors from "cors";
import Pokemon, { IPokemon } from './models/pokemon.model';
import { createPokemon, getAllPokemons } from './services/pokemon.service';

const host: string = config.get("host") as string;
const port: number = config.get("port") as number;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, async () => {
  console.log(`escuchando en http://${host}:${port}`);
  connect();
  routes(app);

  const getPokemonDetaills = async ( url : string ) => {
    const response = await fetch(url); 
    const data = await response.json();  

    const imgUrl = data.sprites.other.home.front_default;
    return imgUrl;
  } 

  const getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150");
    const data = await response.json();
    data.results.forEach(async function(pokemon : any, index: any) {
      const name = pokemon.name
      const img = await getPokemonDetaills(pokemon.url)

      const created = {
        name: name, 
        imgUrl: img, 
        votes: 0
      };

      console.log(created);
      

      await createPokemon(created as IPokemon); 

    });
  };

  //await getPokemons();
  const result : any = await getAllPokemons(); 
  console.log(result);


});
