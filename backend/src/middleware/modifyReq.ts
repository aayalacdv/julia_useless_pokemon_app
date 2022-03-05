import {Request, Response, NextFunction } from 'express';


async function modifyReqBody( req : Request, res: Response, next : NextFunction) {
    //@ts-ignore
    req.user = "JUANITA"; 
    next();   
}