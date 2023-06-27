const express = require("express");
const cors = require("cors");
const databaseConfiguration = require("./config/database.js");
const todo = require("./routers/routes.js");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


databaseConfiguration();

app.use(cors({ 
 orgin: ["http://localhost:3000/", "https://mern-todoApp-wdu3.onrender.com"]
}));


app.use(express.json({ extended: false }));
app.get("/", (req, res) =>
  res.send("Hello there!! Cheers !! The server is up and running")
);


app.use("/api/todoapp", todo);


app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);