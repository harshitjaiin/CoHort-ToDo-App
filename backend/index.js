const express = require("express")
const app = express()
const jwt = require("jsonwebtoken");
const { todo } = require("./db.js");
const {createTodo , updateTodo } = require("./types.js")
const cors = require("cors")

app.use(cors());
app.use(express.json())

//create a todo
app.post("/todo" , async function(req , res){
    console.log("Hi im inside single todo!");
    const payload = req.body;
    const parsedPayload = createTodo.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!"
        })
        return;
    }
    //put it in mongoDB!
    await todo.create({
        title:payload.title,
        desc:payload.desc,
        completed: false
    })

    res.json({
        msg: "To-do Created"
    })
})


// get all todos
app.get("/todos" , async function(req , res){
    console.log("Hi im inside todos!");
    const todos = await todo.find({});
    res.json({
        todos
    })
})


//mark a specific todo as completed!
app.put("/completed" , async function(req , res){
    console.log("Hi im inside completed!");
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Please send a correct id!"
        })
        return ;
    }
    //mark it as completed! 
    await todo.update({
        _id:payload.id
    }, {
        completed: true
    })

    res.json({
        msg:"Marked as completed successfully"
    })
})

console.log("Listening on port 3000");
app.listen(3000);