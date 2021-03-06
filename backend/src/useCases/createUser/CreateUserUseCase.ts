import { hash } from "bcryptjs";

import { client } from "../../prisma/client";

interface IUserRequest {
    username: string;
    email: string;
    password: string;
}

class CreateUserUseCase {

    async execute({ username, email, password }: IUserRequest) {
        const userAlreadyExists = await client.user.findFirst({
            where: {
                email
            }
        });

        if(userAlreadyExists){
            throw new Error("User already exists!");
        }

        const passwordHash = await hash(password, 8);

        const user = await client.user.create({
            data: {
                username,
                email,
                password: passwordHash
            }
        });
        
        return user
    }
    
    async taskSearch( id: string ){
        const getUser = await client.todoList.findMany({
            where: { authorId: id },
        })
        return getUser;
    }
}

export { CreateUserUseCase }