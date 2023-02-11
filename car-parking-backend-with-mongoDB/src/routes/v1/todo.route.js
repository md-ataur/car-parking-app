const express = require("express");
const router = express.Router();
const { todoController } = require("../../controllers");

router.get("/", todoController.getTodos);

router.post("/users", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.sendStatus(400);
    return;
  }
  res.send({ userId: 1, status: 200 });
});

module.exports = router;
