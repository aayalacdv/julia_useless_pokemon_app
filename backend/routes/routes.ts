import { Express } from "express";
import books from './books.routes'; 
import alternative from './alternative.routes'; 



export default function routes ( app: Express){
    books(app); 
    alternative(app); 
}

