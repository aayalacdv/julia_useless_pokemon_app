import { Express } from "express";
import pokemonRoutes from "./pokemon.routes";



export default function routes ( app: Express){
    
    pokemonRoutes(app); 

}

