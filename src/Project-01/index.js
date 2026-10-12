const express = require("express");
const app = express();
const PORT = 8000;
const users = require("./MOCK_DATA.json");

//Start server
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.body, "Middleware setup successful");
  return res.json({ message: "Middleware setup successful" });
  next();
});

//GET users
app.get("/users", (res) => {
  return res.json(users);
});

//GET user by Id
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(user);
});

//POST create new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    first_name: "John",
    last_name: "Doe",
    email: "john@doe.com",
    gender: "VP Quality Control",
  };
  users.push(newUser);
  return res.json(newUser);
});

// PATCH: Update specific fields of a user
app.patch("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) return res.status(404).json({ message: "User not found" });
  Object.assign(user, { first_name: "Patch update" });
  return res.json(user);
});

// PUT: Replace the user's data
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return res.status(404).json({ message: "User not found" });
  users[index] = { id, ...req.body };
  return res.json(users[index]);
});

//DELETE user
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return res.status(404).json({ message: "User not found" });
  users.splice(index, 1);
  return res.json({ message: "User deleted successfully" });
});

//res.send() for HTML return
//npm i nodemon: to install nodemon for server running with updates
