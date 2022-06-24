import { client } from "../../prisma/client"

interface ITaskRequest {
    id: string
    active: boolean
}
class UpdateTaskUseCase{
    async updateTask({ id, active }:ITaskRequest){
        const task = await client.todoList.update({
            where: { id: id},
            data: {active: active}
        });
        return task;
    }
}

export { UpdateTaskUseCase }