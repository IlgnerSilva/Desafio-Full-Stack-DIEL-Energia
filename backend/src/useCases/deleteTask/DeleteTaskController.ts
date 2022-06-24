import { Request, Response } from "express";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

class DeleteTaskController {
    async delete(req: Request, res: Response){
        const { id } = req.params;

        const deleteTaskUseCase = new DeleteTaskUseCase();
        const task = await deleteTaskUseCase.deleteTask(id);
        return res.json(task);
    }
}

export { DeleteTaskController }