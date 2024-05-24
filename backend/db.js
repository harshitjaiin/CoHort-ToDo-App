const mongoose = require("mongoose");

//mongodb+srv://harshitjaiin:DTU188jain@harshitxdev.6zuqfbb.mongodb.net/
mongoose.connect("mongodb+srv://harshitjaiin:DTU188jain@harshitxdev.6zuqfbb.mongodb.net/TodoProject");
const todoSchema = mongoose.Schema({
    title:String,
    desc:String,
    completed:Boolean 
})


//konse database ko model karna hai todoSchema ke according!
const todo = mongoose.model('TodoProject' , todoSchema);

module.exports={
    todo
}