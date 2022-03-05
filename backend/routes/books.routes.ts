import { Express, Request, Response } from "express";
import {
  createOneHandler,
  deleteOneHandler,
  getAllHandler,
  getOneHandler,
  updateOneHandler,
} from "../src/controller/book.controller";

export default function routes(app: Express) {
  //DEFAULT ROUTE
  app.get("/", getAllHandler);

  //POST METHOD
  app.post("/api/books", createOneHandler);

  //GET METHOD
  app.get("/api/books/:id", getOneHandler);

  //DELETE METHOD
  app.delete("/api/books/:id", deleteOneHandler);

  //PUTH METHOD
  app.put("/api/books/:id", updateOneHandler); 
  
}
