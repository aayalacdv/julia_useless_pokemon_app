import mongoose, { Schema, Model, Document } from "mongoose";

//Primeramente creamos una interfaz con los datos del modelo
//es aconsejable exportar la interfaz para poder usarla en otros archivos
export interface IPokemon extends Document {
  name: string;
  imgUrl: string;
  votes: number;
}


//Cremaos un schema y lo asignamos al tipo de la interfaz anterior
const pokemonSchema = new Schema<IPokemon>(
  {
//Definimos las propiedades que pusimos antes en la interfaz
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    votes: { type: Number, required: true, min: 0 },
  },
//podemos pasar otro objeto de manera opcional con otras propiedades que pone la librería
  { timestamps: true }
);


// definimos un modelo que es lo que usaremos para hacer queries a la base de datos y lo que tendrá toddas las propiedades definidas antes.
const Pokemon = mongoose.model('Pokemon',pokemonSchema);

export default Pokemon;
