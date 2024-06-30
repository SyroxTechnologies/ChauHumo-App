import { Router } from "express";
import userRegisterController from "../controllers/user/userRegisterController.js";
import userLoginController from "../controllers/user/userLoginController.js";

const userRouter = Router()

userRouter.route('/user/register-user').post(userRegisterController)
userRouter.route('/user/login').post(userLoginController)

export default userRouter