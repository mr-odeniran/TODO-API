const express = require("express")
const {createTodo, getAllTodos , updateTodo, deleteTodo} = require("../controller/todo_controller")

const router = express.Router()

router.post("/create",createTodo)
router.get("/create",getAllTodos)
router.patch("/create",updateTodo)
router.delete("/create",deleteTodo)

module.exports = router


