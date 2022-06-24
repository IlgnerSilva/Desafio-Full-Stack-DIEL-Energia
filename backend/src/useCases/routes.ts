import { Router } from "express";
import { AuthenticateUserController } from "./authenticateUser/AuthenticateUserController";
import { CreateTaskController } from "./createTask/CreateTaskController";
import { CreateUserController } from "./createUser/CreateUserController";
import { middlewareAuthentication } from "./../middlewares/middlewareAuthentication"
import { UpdateTaskController } from "./updateTask/UpdateTaskController";
import { DeleteTaskController } from "./deleteTask/DeleteTaskController";

const router = Router();
const authenticateUserController = new AuthenticateUserController();


const createUserController = new CreateUserController();
router.post("/auth/register/user", createUserController.hadle);
router.post("/auth/user/login", authenticateUserController.handle);

const createTaskController = new CreateTaskController();
router.post('/register/task', middlewareAuthentication, createTaskController.create)
router.post("/busca", createUserController.userTaskSearch);

const updateTaskController = new UpdateTaskController();
router.patch('/task/update', updateTaskController.update)

const deleteTaskController = new DeleteTaskController();
router.delete('/task/delete/:id', deleteTaskController.delete)

export { router }