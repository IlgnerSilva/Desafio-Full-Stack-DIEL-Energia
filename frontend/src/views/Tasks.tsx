import { useEffect, useState } from "react";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
import NavBar from "../components/NavBar/NavBar";
import { deleteTask, getTask, updateTask } from "../services/Tasks.service";

interface Task {
    id: string;
    title: string;
    description: string;
    task_date: string;
    task_time: string;
    task_duration: string;
    active: string | undefined;
    authorId: string;
}

const TaskView: React.FC = () => {
    const idUser = window.localStorage.getItem('id');
    const [taskItens, setTaskItens] = useState<Task[]>([]);

    useEffect(() => {
        if (idUser) {
            getData(idUser)
        }
    }, [])

    async function getData(idUser: any) {
        const task = await getTask(idUser);
        setTaskItens(task)
    }

    async function update(item: any) {
        await updateTask(item);
    }

    async function remove(item: any) {
        await deleteTask(item);
        return getData(idUser)
    }




    return (
        <>
            <NavBar />
            <div className="">
                <h1>Your tasks</h1>
            </div>
            {taskItens ? (
                taskItens.map(item => {
                    return (
                        <div key={item.id} className="">
                            <input
                                type="checkbox"
                                defaultChecked={!item.active}
                                onClick={() => { update({ ...item, active: !item.active }) }} />
                            <span>{item.title}</span>
                            <button
                                type="button"
                                className="border border-red-500 bg-red-500 text-white rounded-md px-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                onClick={() => { remove(item.id) }}
                            >Apagar</button>
                        </div>
                    )
                })
            ) : null
            }
            <div>
                <button
                    type="button"
                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-2 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Todos</button>
                <button
                    type="button"
                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Pendentes</button>
                <button
                    type="button"
                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Concluido</button>
                <button
                    type="button"
                    className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Adicionar</button>
            <AddTaskModal />
            </div>
        </>
    )
}

export default TaskView;