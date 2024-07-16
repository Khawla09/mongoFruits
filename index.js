require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const conn = require("./db/conn");
const fruitRoutes = require("./routes/fruits");
const Fruit = require("./models/fruit");
const starterFruits = require("./db/seed");
conn();
app.use(express.json());
//View Engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
//Middleware
app.use("/api/fruits", fruitRoutes);

// app.use("/veggies", veggiRoutes)
//Routes
//home
app.get("/", (req, res) => {
  res.send("Home Route");
});

app.get("/fruits/seed", async (req, res) => {
  try {
    await Fruit.deleteMany({});
    await Fruit.create(starterFruits);
    res.json(starterFruits);
  } catch (error) {
    console.log("something went wrong loading seed " + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
