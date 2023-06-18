import { User } from "../models/index.js";
import jwt from "jsonwebtoken";

// For register a user
const registerUser = async (req, res) => {
  try {
    const { userName, email, contactNo } = req.body;
    const { password } = req.locals;
    await User.create({
      userName,
      password,
      email,
      contactNo,
    });
    res.status(200).json({ message: "user created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};

const loginUser = (req, res) => {
  try {
    const { isAuthenticated } = req.locals;

    const accessToken = jwt.sign(
      { email: "shreyansh", password: "ninja" },
      process.env.ACCESS_TOKEN_SECRET
    );
    console.log(accessToken, "accessToken");
    if (isAuthenticated) {
      req.session.jwtToken = accessToken;
      return (
        res
          .status(200)
          // .setHeader("Set-Cookie", "Ninja=true secure")
          // .cookie("Hello", "dsdsdsdsdd", { secure: true, httpOnly: true })
          .json({ message: "Login done successfully" })
      );
    } else {
      return res.status(400).json({ message: "Wrong username and password" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong", users: [] });
  }
};

// For get All users
const getAllUser = async (req, res) => {
  try {
    console.log(req.session.jwtToken, "GGGGGGGGGGGGGGGGG");
    jwt.verify(
      req.session.jwtToken,
      process.env.ACCESS_TOKEN_SECRET,
      (err, data) => {
        console.log(err, data, "FFFFFFF");
      }
    );
    const users = await User.find({}, { password: 0 });
    res.status(200).json({ message: "Users find successfully", users });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong", users: [] });
  }
};

const logoutHandler = (req, res) => {
  req.session.destroy(() => {
    return res.status(200).json({ message: "Users Logout successfully" });
  });
};

export { registerUser, loginUser, getAllUser, logoutHandler };
