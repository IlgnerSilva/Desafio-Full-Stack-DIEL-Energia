import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async hadle(req: Request, res: Response){
        const { username, email, password } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const user = await createUserUseCase.execute({
            username,
            email,
            password
        });

        return res.json(user)
    }

    async userTaskSearch(req: Request, res: Response){
        const { authorId } = req.body;
        const createUserUseCase = new CreateUserUseCase();
        const user = await createUserUseCase.taskSearch(authorId);
        return res.json(user);
    }
}

export { CreateUserController }