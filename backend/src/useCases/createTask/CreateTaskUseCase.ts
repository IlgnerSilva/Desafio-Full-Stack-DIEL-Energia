
import { client } from "../../prisma/client";

interface ITaskRequest {
    title: string;
    description: string;
    task_date: string;
    task_time: string;
    task_duration: string;
    active: boolean
    authorId: string,
}

class CreateTaskUseCase {
    async createTask({ title, description, task_date, task_time, task_duration, active, authorId }: ITaskRequest){
        const task = await client.todoList.create({
            data: {
                title,
                description,
                task_date,
                task_time,
                task_duration,
                active,
                authorId
            }
        });
        return task;
    }
}

export { CreateTaskUseCase }