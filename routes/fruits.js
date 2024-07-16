//Fruit CRUD Routes
const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruit");
//index - GET
router.get("/", async (req, res) => {
  try {
    const allFruits = await Fruit.find({});
    res.json(allFruits);
  } catch (error) {
    res.status(500).json({ msg: "Whoops there is a problem getting data" });
    console.error(error.msg);
  }
});
//show - GET
router.get("/:id", async (req, res) => {
  const oneFruit = await Fruit.findById(req.params.id);
  res.json(oneFruit);
});
//new - GET - form

//create - POST
router.post("/", async (req, res) => {
  const newFruit = await Fruit.create(req.body);
  res.json(newFruit);
});
//edit - GET - form

//Update - PUT/PATCH
router.put("/:id", async (req, res) => {
  const updateFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body);
  res.json(updateFruit);
});

//Destroy - delete
router.delete("/:id", async (req, res) => {
  const deleteFruit = await Fruit.findByIdAndDelete(req.params.id);
  res.json(deleteFruit);
});

module.exports = router;
