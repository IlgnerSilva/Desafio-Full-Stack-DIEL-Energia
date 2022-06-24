import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController{
    async handle(req: Request, res: Response){
        const { email, password } = req.body;
        try{
            const authenticateUserUseCase = new AuthenticateUserUseCase();
            const tokenAndUser = await authenticateUserUseCase.execute({
                email,
                password
            });
            return res.status(200).json(tokenAndUser);
        }catch(err){
            return res.status(401).json(err.message);
        }


    }
}

export { AuthenticateUserController }