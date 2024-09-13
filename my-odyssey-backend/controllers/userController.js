const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//controller to get all users
//public access
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//controller to get a specific user by ID
//public access
const getUser = asyncHandler(async (req, res) => {
  console.log(res);
  res.json({ message: `Get user details for ${req.params.id}` });
});

//controller to create a new user
//public access
const createUser = asyncHandler(async (req, res) => {
  console.log("The request body is:", req.body);
  const { username, email, userImage, location } = req.body;
  if (!username || !email || !location) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }

  const user = await User.create({
    username,
    email,
    userImage,
    location,
  });
  res.json(user);
});

//controller to update a users details
//public access
const updateUser = asyncHandler(async (req, res) => {
  res.json({ message: `Update user details for ${req.params.id}` });
});

//controller to delete a user
//public access
const deleteUser = asyncHandler(async (req, res) => {
  res.json({ message: `Delete user ${req.params.id}` });
});

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
