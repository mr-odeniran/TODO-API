const todo = require("../model/todo_model")



// crud

//* create todo
 const createTodo = async (req, res)=>{
        const {title} = req.body

        if(!title){
            res.json({
                message:"please provide a title ",
                status: 404
            })
        }

    try {
        const newTodo = new todo({
            title
        }) 


        const savedTodo = await newTodo.save()

        if(savedTodo){
            res.status(201).json({
                message:"todo created successfully",
                status:201,
                data:savedTodo
            })
        }

        


    } catch (error) {
    res.status().json({
        message: 'error while creating todo',
        status: 401,

    })

    }
 }







//* read todo
const getAllTodos = async (req, res)=>{
   try {
    const todos = await todo.find()

    res.status(200).json({
        status: "success",
        message: "All todos gotten successfully",
        result: todos.length,
        data: todos,
      });
    
   } catch (error) {
    res.status(200).json({
        status: "error",
        message: "error while fetching todos",
      });
   }
}





//*update todo

const updateTodo = async(req, res)=>{
    const {id} = req.body
    const updates = req.body

    try {
        console.log(id)
        const updatedTodo = await todo.findOneAndUpdate(
            {_id:id},
            {$set: updates},
            {runValidation: true, new: true}
        )
        if(!updatedTodo){
            res.status(401).json({
                message:`todo with id ${id} not found  `,
                status:401
            })
        }

        res.json({
            message:id,
            data:updatedTodo
        })
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "error while updating todo with id " + id,
          });
    }
}






//*delete todo
const deleteTodo = async (req, res)=>{
    const {id} = req.body
    try {
        const todoToDelete = await todo.findById({_id:id})

        

        if (!todoToDelete) {
             res.status(404).json({
                status: "error",
                message: "Todo not found",
            });
        }


        if (todoToDelete) {
            await todo.findOneAndDelete({_id:id})
            res.status(200).json({
                message:"success",
                status: "200",
            })
        }
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "error while updating todo with id " + id,
          });
    }
}



module.exports = {createTodo,getAllTodos, updateTodo, deleteTodo}