import { Router } from "express";
import { AuthenticateUserController } from "./authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./createUser/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.post("/auth/register/user", createUserController.hadle);
router.post("/auth/user/login", authenticateUserController.handle);

export { router }