const express = require("express");
const app = express();
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
app.get("/users", (req, res) => {
  return res.json(users);
});

//res.send() for HTML return
