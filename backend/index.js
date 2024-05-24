const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = new express()
const {todo} = require("./db")
const cors = require("cors")
app.use(express.json())
app.use(cors())

const port = 3000;
//what do i need in the body of a req isko validate kr skte h using zod!
app.post("/todo" , async function (req , res){
    const payload = req.body;
    const parsedPayload =  createTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong input format"
        })
        return ;
    }
    // put in mongoDb
    await todo.create({
        title : payload.title,
        desc: payload.desc,
        completed : false
    })

    res.json({
        msg: "todo Created"
    })
})

app.get("/todos", async function(req, res) {
    try {
        // Get all todos
        const todos = await todo.find();
        // Send response with 200 status code and todos in JSON format
        res.status(200).json({ todos });
    } catch (error) {
        console.error("Error fetching todos:", error);
        // Send response with 500 status code and error message
        res.status(500).json({ message: "Failed to fetch todos" });
    }
});


//marking a todo as completed!
app.put("/completed" , async function(req , res){
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Please send the correct input format!"
        })
        return ;
    }


    await todo.updateOne({
        _id: payload.id
    }, {
        completed : true
    })

    res.json({
        msg : "Successfully Updated!"
    })
})

app.listen(port);