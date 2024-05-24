const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = new express()
const {Todo} = require("../db")
app.use(express.json())

//what do i need in the body of a req isko validate kr skte h using zod!
app.post("/todo" , async function (req , res){
    const payload = req.body;
    const parsedPayload =   createTodo.safeParse(oayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong input format"
        })
        return ;
    }
    // put in mongoDb
    await Todo.create({
        title : payload.title;
        desc: payload.desc,
        completed : false
    })

    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos" , async function(req , res){

    //get all todos!
    const todos = await Todo.find({})

    res.json({
        todos
    })
})

//marking a todo as completed!
app.put("/completed" , function(req , res){
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"Please send the correct input format!"
        })
        return ;
    }


    await Todo.updateOne({
        _id  = payload.id
    }, {
        completed : true
    })

    res.json({
        msg : "Successfully Updated!"
    })
})