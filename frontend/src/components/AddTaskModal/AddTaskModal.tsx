import React, { useState } from "react";
import { createTask, getTask } from "../../services/Tasks.service";
import InputMask from "react-input-mask";
import Swal from 'sweetalert2';

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

export default function AddTaskModal(){
    const [showModal, setShowModal] = useState(false);
    const id: string | null | any = window.localStorage.getItem('id');
    const [addTask, setAddTask] = useState({
        title: '', 
        description: '',
        task_date: '',
        task_time: '',
        task_duration: '',
        active: true,
        authorId: id
    });

    const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            await createTask(addTask);
            setShowModal(false)
            window.location.reload()
        } catch (err: any){
            Swal.fire('oops!', err.response.data.message, 'error')
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddTask({
            ...addTask,
            [name]: value
        })
    }


    return (
        <>
            <button className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" type="button" value="Create an account!" onClick={() => setShowModal(true)}>Add Task</button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">create your account</h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <form onSubmit={e => handleFormSubmit(e)}>
                                        <input 
                                            onChange={handleInputChange}
                                            value={addTask.title}
                                            name="title"
                                            className='m-1 p-1 w-full rounded-md border-solid border-2 border-indigo-600'
                                            type="text"
                                            placeholder="title"
                                            required
                                        />
                                        <input 
                                            onChange={handleInputChange}
                                            value={addTask.description}
                                            name="description"
                                            className='m-1 p-1 w-full rounded-md border-solid border-2 border-indigo-600'
                                            type="text"
                                            placeholder="description"
                                            required
                                        />
                                        <InputMask 
                                            mask="99/99/9999" 
                                            name="task_date" 
                                            value={addTask.task_date}
                                            onChange={handleInputChange} 
                                            className="m-1 p-1 w-full rounded-md border-solid border-2 border-indigo-600"
                                            type="text"
                                            placeholder="Task Date"
                                            required
                                            />

                                            <InputMask 
                                            mask="99:99:99" 
                                            name="task_time" 
                                            value={addTask.task_time}
                                            onChange={handleInputChange} 
                                            className="m-1 p-1 w-full rounded-md border-solid border-2 border-indigo-600"
                                            type="text"
                                            placeholder="Task Time"
                                            required
                                            />

                                            <InputMask 
                                            mask="99:99:99" 
                                            name="task_duration" 
                                            value={addTask.task_duration}
                                            onChange={handleInputChange} 
                                            className="m-1 p-1 w-full rounded-md border-solid border-2 border-indigo-600"
                                            type="text"
                                            placeholder="Task Duration"
                                            required
                                            />
                                            <input 
                                            onChange={handleInputChange}
                                            value={id}
                                            name="authorId"
                                            className='m-1 p-1 w-full rounded-md border-solid border-2 border-indigo-600'
                                            type="text"
                                            placeholder="AuthorId"
                                            disabled
                                            required
                                        />
                                        <input className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent" type="submit" value="Register" />
                                    </form>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                                    <input className="absolute top-0 -right-0 border-2 rounded-full border-red-500 text-red-500 background-transparent font-bold uppercase py-0.5 px-2" type="button" value="X" onClick={() => setShowModal(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}