const zod = require("zod");

//agar banana hai toh 2 chiz!
const createTodo = zod.object({
    title: zod.string(),
    desc : zod.string()
})

//agar completed mark karna hai to id dedo uski!
const updateTodo = zod.object({
    id:zod.string()
})

module.exports = {
    createTodo : createTodo , 
    updateTodo : updateTodo
}