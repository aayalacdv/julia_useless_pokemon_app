import { IBook } from "./../models/book.model";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../services/book.service";
import { Request, Response } from "express";

//el controlador es otro fichero donde separamos más la lógica de la app, en este caso lidiamos con las peticiones del cliente
//pasamos los objetos de request y response para poder responder a cada peticion del cliente

export async function getAllHandler(req: Request, res: Response) {
  const results = await getAllBooks();
  res.send(results).status(200);
}

export async function createOneHandler(req: Request, res: Response) {
  const book = req.body as IBook;
  console.log(req.body);
  await createBook(book)
    .then((result) => {
      if(result) res.json(result).status(201);
      res.status(403).send({mensaje : "Cuerpo inválido"}); 

    })
    .catch((error: any) => {
      res.status(500).send({ Error: error });
    });
}

export async function getOneHandler(req: Request, res: Response) {
  const id = req.params.id;
  await getBook(id)
    .then((book) => {
      if (book) res.json(book).status(200);
      res.status(404).send({mensaje: "Libro no encontrado"});
    })
    .catch((error) => res.status(500).send("Error del servidor"));
}


export async function deleteOneHandler(req: Request, res: Response) {
  const id = req.params.id;
  await deleteBook(id)
    .then((result : any) => {
      if(!result){
        res.status(404).send({mensaje: "libro no encontrado"}); 
      }else {
        res.status(200).send({ Mensaje: "Libro borrado con éxito" });
      }
    })
    .catch((error) => res.status(500).send("Error"));
}


export async function updateOneHandler(req: Request, res: Response) {
  const id = req.params.id;
  const book = req.body as IBook;
  await updateBook(book, id)
    .then((result: any) => {
      if (result) res.status(200).json(result);
      res.status(404).send({ mensaje: "Libro no encontrado " }); 
    })
    .catch((error) => res.status(500).send(error));
}
