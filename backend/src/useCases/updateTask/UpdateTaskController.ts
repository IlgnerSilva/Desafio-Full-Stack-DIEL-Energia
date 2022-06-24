import { Request, Response } from "express";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

class UpdateTaskController {
    async update(req: Request, res: Response){
        const { id, active } = req.body;
        const updateTaskUseCase = new UpdateTaskUseCase();
        const task = await updateTaskUseCase.updateTask({
            id, 
            active
        });
        return res.json(task);
    }
}

export { UpdateTaskController }