import { genSalt, hash, compare } from "bcrypt";
import { User } from "../models/index.js";

// For hash the plain text <password></password>
const generateHashedPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    req.locals = {
      password: hashedPassword,
    };
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

// For authenticate the user based on email and password
const authenticateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const isAuthenticated = await compare(password, user.password);
      req.locals = {
        isAuthenticated,
      };
      next();
    } else {
      return res.status(400).json({ message: "No user find" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

export { generateHashedPassword, authenticateUser };
