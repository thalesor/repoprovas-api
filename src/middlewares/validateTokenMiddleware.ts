import { NextFunction, Request, Response } from "express";
import * as authService from "../services/authService.js";
import jwt from 'jsonwebtoken';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {

        const { authorization } = req.headers;
        const token = authorization?.replace('Bearer ', '');
        if (!token) {
            throw {type:"conflict", message: "Está faltando o token de autenticação"}
        }
        
        const key = process.env.JWT_SECRET;

        const data = jwt.verify(token, key, async function (err: any, decoded: any) {
            if (err)
            return res.status(500).send("Erro durante a validação do token ou esse está expirado");
            
            const session = await authService.getSession(decoded.sessionId);
            res.locals.userId = session.userId;
            next();
            
        });
        
        
}
