import TaskItens from "../components/TaskItens/TaskItens";
import http from "../utils/http";


interface Task {
    id?: string;
    title: string;
    description: string;
    task_date: string;
    task_time: string;
    task_duration: string;
    active: boolean;
    authorId: string;
}

export const getTask = async(id: Task) => {
    const response = await http.post('/busca', {authorId: id});
    return response.data;
}

export const createTask = async(task: Task) => {
    const response = await http.post('/register/task', task, {headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }});
    return response.data;
}

export const updateTask = async(item: Task) => {
    const response = await http.patch('/task/update',  {id: item.id, active: item.active});
    return response.data;
}

export const deleteTask = async(id: Task) => {
    const response = await http.delete(`/task/delete/${id}`);
    return response.data
}