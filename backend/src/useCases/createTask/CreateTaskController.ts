import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
    async create(req: Request, res: Response){
        const {title, description, task_date, task_time,task_duration, active, authorId } = req.body
        console.log(req.body)

        const createTaskUseCase = new CreateTaskUseCase();

        const task = await createTaskUseCase.createTask({
            title,
            description,
            task_date,
            task_time,
            task_duration,
            active,
            authorId
        });

        return res.json(task);
    }
}

export { CreateTaskController }