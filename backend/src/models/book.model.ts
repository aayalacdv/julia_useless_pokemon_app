import mongoose, { Schema, Model, Document } from "mongoose";

//Primeramente creamos una interfaz con los datos del modelo
//es aconsejable exportar la interfaz para poder usarla en otros archivos
export interface IBook extends Document {
  name: string;
  author: string;
  price: number;
}


//Cremaos un schema y lo asignamos al tipo de la interfaz anterior
const bookSchema = new Schema<IBook>(
  {
//Definimos las propiedades que pusimos antes en la interfaz
    name: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
  },
//podemos pasar otro objeto de manera opcional con otras propiedades que pone la librería
  { timestamps: true }
);


// definimos un modelo que es lo que usaremos para hacer queries a la base de datos y lo que tendrá toddas las propiedades definidas antes. 
const Book = mongoose.model('Book',bookSchema); 

export default Book; 
