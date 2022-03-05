import { Express } from 'express';
import {
    getAllHandler,
    getTwoRandomHandler,
    updateOneHandler,
  } from "../src/controller/pokemon.controller";

export default function( app: Express){

    //define routes
    app.get('/api/pokemons', getAllHandler);
    app.get('/api/random', getTwoRandomHandler);
    app.put('/api/votes', updateOneHandler);

}