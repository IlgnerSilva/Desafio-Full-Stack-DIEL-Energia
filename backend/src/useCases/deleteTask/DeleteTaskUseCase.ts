import { client } from "../../prisma/client"

class DeleteTaskUseCase{
    async deleteTask(id: string){
        const task = await client.todoList.delete({
            where: { id: id}
        });
        return task;
    }
}

export { DeleteTaskUseCase }