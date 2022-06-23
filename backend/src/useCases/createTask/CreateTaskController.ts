import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
    async handle(req: Request, res: Response){
        const {title, description, task_date, task_time,task_duration, authorId } = req.body

        const createTaskUseCase = new CreateTaskUseCase();

        const task = await createTaskUseCase.execute({
            title,
            description,
            task_date,
            task_time,
            task_duration,
            authorId
        });

        return res.json(task);
    }
}

export { CreateTaskController }