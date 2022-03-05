import { Express, Request, Response  } from "express";

//podemos separar las rutas haciendo funciones que tomen la app de express como parámetro y montándolo en otro endpoint
export default  function routes ( app : Express){

    app.get('/api/alternativeroute', (req : Request, res: Response) => {
        res.status(200).send({message: "this is an alternative route "}); 
    })
}