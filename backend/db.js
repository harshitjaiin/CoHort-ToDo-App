const mongoose = require("mongoose");

//mongodb+srv://harshitjaiin:DTU188%40jain@harshitxdev.6zuqfbb.mongodb.net/
mongoose.connect("mongodb+srv://harshitjaiin:DTU188%40jain@harshitxdev.6zuqfbb.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title:String,
    desc:String,
    completed:Boolean 
})

const todo = mongoose.model('todos' , todoSchema);

module.exports={
    todo
}