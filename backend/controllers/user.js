import { User } from "../models/index.js";

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
    if (isAuthenticated) {
      return res.status(200).json({ message: "Login done successfully" });
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
    const users = await User.find({}, { password: 0 });
    res.status(200).json({ message: "Users find successfully", users });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong", users: [] });
  }
};

export { registerUser, loginUser, getAllUser };
