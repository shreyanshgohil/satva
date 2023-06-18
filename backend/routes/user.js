import { Router } from "express";
import {
  getAllUser,
  loginUser,
  registerUser,
  logoutHandler,
} from "../controllers/user.js";
import {
  generateHashedPassword,
  authenticateUser,
} from "../middlewares/user.js";
// inits
const userRoutes = Router();

// user routes

userRoutes.post("/register", generateHashedPassword, registerUser);

userRoutes.post("/login", authenticateUser, loginUser);

userRoutes.post("/logout", logoutHandler);

userRoutes.get("/get-users", getAllUser);

export default userRoutes;
