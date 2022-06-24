import { useEffect, useState } from "react";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
import Buttons from "../components/Buttons/Buttons";
import NavBar from "../components/NavBar/NavBar";
import { deleteTask, getTask, updateTask } from "../services/Tasks.service";

interface Task {
    id: string;
    title: string;
    description: string;
    task_date: string;
    task_time: string;
    task_duration: string;
    active: boolean;
    authorId: string;
}

const TaskView: React.FC = () => {
    const idUser = window.localStorage.getItem('id');
    const [taskItens, setTaskItens] = useState<Task[]>([]);
    const [filterItens, setFilterItens] = useState({ filter: false, active: false })

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
        getData(idUser)
    }

    async function remove(item: any) {
        await deleteTask(item);
        return getData(idUser)
    }

    if (filterItens.filter) {
        taskItens.filter(item => item.active === filterItens.active)
    }

    const itensToShow = filterItens.filter ? taskItens.filter(item => item.active === filterItens.active) : taskItens




    return (
        <>
            <NavBar />
            <div className="bg-white max-w-md my-2.5 mx-auto rounded-t-md p-2 mb-10">
                <div className="">
                    <h1>Your tasks</h1>
                </div>
                <div className="text-center">
                    <button
                        onClick={() => setFilterItens({ filter: false, active: true })}
                        type="button"
                        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-2 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">All</button>
                    <button
                        onClick={() => setFilterItens({ filter: true, active: true })}
                        type="button"
                        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">outstanding</button>
                    <button
                        onClick={() => setFilterItens({ filter: true, active: false })}
                        type="button"
                        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">concluded</button>
                    <AddTaskModal />
                </div>
                {
                    itensToShow.map(item => {
                        return (
                            <div
                                key={item.id}
                                className="mt-5 max-w-sm rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">
                                        <input
                                            type="checkbox"
                                            defaultChecked={!item.active}
                                            onClick={() => { update({ ...item, active: !item.active }) }} />
                                        <span
                                            style={item.active ? {} : { textDecoration: "line-through" }}>{item.title}</span>
                                    </div>
                                    <p className="text-gray-700 text-base"><strong>Task description:</strong> {item.description}
                                    </p>
                                    <p className="text-gray-700 text-base"><strong>
                                        date and time :</strong> {item.task_date} {item.task_time} 
                                    </p>
                                    <p className="text-gray-700 text-base"><strong>
                                    task duration :</strong> {item.task_duration}  
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="border border-red-500 bg-red-500 text-white rounded-md px-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                    onClick={() => { remove(item.id) }}
                                >Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TaskView;