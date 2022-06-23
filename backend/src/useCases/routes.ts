import { Router } from "express";
import { AuthenticateUserController } from "./authenticateUser/AuthenticateUserController";
import { CreateTaskController } from "./createTask/CreateTaskController";
import { CreateUserController } from "./createUser/CreateUserController";
import { middlewareAuthentication } from "./../middlewares/middlewareAuthentication"

const router = Router();

const createUserController = new CreateUserController();
const createTaskController = new CreateTaskController();
const authenticateUserController = new AuthenticateUserController();

router.post("/auth/register/user", createUserController.hadle);
router.post("/auth/user/login", authenticateUserController.handle);
router.post('/register/task', middlewareAuthentication, createTaskController.handle)
router.post("/busca", createUserController.userTaskSearch);

export { router }