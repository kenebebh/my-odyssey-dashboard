//controller to get all users
//public access
const getUsers = (req, res) => {
  res.json({ message: "Get all users" });
};

//controller to get a specific user by ID
//public access
const getUser = (req, res) => {
  console.log(res);
  res.json({ message: `Get user details for ${req.params.id}` });
};

//controller to create a new user
//public access
const createUser = (req, res) => {
  console.log("The request body is:", req.body);
  const { username, email, userImage, location } = req.body;
  if (!username || !email || !location) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }
  res.json({ message: "Create a new user" });
};

//controller to update a users details
//public access
const updateUser = (req, res) => {
  res.json({ message: `Update user details for ${req.params.id}` });
};

//controller to delete a user
//public access
const deleteUser = (req, res) => {
  res.json({ message: `Delete user ${req.params.id}` });
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
