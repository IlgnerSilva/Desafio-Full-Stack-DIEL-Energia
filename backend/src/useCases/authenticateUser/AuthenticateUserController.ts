import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController{
    async handle(req: Request, res: Response){
        const { email, password } = req.body;
        console.log(email)
        const authenticateUserUseCase = new AuthenticateUserUseCase();

        const tokenAndUser = await authenticateUserUseCase.execute({
            email,
            password
        });

        return res.json(tokenAndUser);
    }
}

export { AuthenticateUserController }