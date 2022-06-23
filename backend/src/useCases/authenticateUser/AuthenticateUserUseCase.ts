import { client } from "../../prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest {
    email: string;
    password: string;
}

class AuthenticateUserUseCase {
    async execute({ email, password }: IRequest) {
        // Verificando se o usuário existe
        const userAlreadyExists = await client.user.findFirst({
            where: {
                email,   
            }
        });

        if(!userAlreadyExists){
            throw new Error("User or password incorrect");
        }

        // Verificando se a senha está correta
        const passwordMatch = await compare(password, userAlreadyExists.password);
        if(!passwordMatch){
            throw new Error("User or password incorrect");
        }

        // Gerando token do usuário
        const payload = {
            id: userAlreadyExists.id
        }
        const token = sign(payload, process.env.KEY_TOKEN, {
            subject: userAlreadyExists.id,
            expiresIn: "20s"
        });

        return token
    }
}

export { AuthenticateUserUseCase }