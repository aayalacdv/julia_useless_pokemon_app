import { IBook } from "./../models/book.model";
import Book from "../models/book.model";

//Definimos funciones para hacer queries a la base de datos y manejar los posibles errores
//Get all books
export async function getAllBooks() {
  return Book.find().catch((error : any) => {
    console.error("Error encontrando libros", error);
  });
}

//Create book
export async function createBook(book: IBook) {
//creamos un libro pasándole un objeto de la interfaz definida anteriormente
  return Book.create(book).catch((error : any) => {
    console.error("Error crando un libro ", error);
  });
}

//Get a book for id :
export async function getBook(bookId: string) {
//Devolvemos un libro con un id determinado 
  return Book.findById(bookId).catch((error : any) => {
    console.error("Error encontradndo libro con id: " + bookId, error);
  });
}

//Delete book
export async function deleteBook(bookId: string) {
//borramos el libro en el id determinado
  return Book.findOneAndDelete( { _id : bookId} )
  .catch((error : any) => {
    console.error("Error borrando libro con id: " + bookId, error);
  });
}

//Update a book
export async function updateBook(book: IBook, bookId: string) {
    //pasamos un filtro para la base de datos primero en este caso es el id del libro que queremos cambiar 
    //lo segundo es un objeto con las propiedades que queramos cambiar en este caso enviaremos todo un libro pero podría ser solo el nombre por ejemplo
  return Book.findByIdAndUpdate(
    bookId ,
    book, { useFindAndModify: false } 
  )
    .then((result : any) => {
        console.log("Libro cambiado"); 
    })
    .catch((error : any) => {
      console.error("Error borrando libro con id: " + bookId, error);
    });
}
