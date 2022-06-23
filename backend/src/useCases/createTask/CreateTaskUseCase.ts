
import { client } from "../../prisma/client";

interface ITaskRequest {
    title: string;
    description: string;
    task_date: string;
    task_time: string;
    task_duration: string;
    authorId: string,
}

class CreateTaskUseCase {
    async execute({ title, description, task_date, task_time, task_duration, authorId }: ITaskRequest){
        const task = await client.todoList.create({
            data: {
                title,
                description,
                task_date,
                task_time,
                task_duration,
                authorId
            }
        });
        return task;
    }
}

export { CreateTaskUseCase }