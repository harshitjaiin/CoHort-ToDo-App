export function Todos({todos}){

    //final ek hi block return ho payega!!
    return (
        <div>
            {todos.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h1>{todo.description}</h1>
                    <button>{todo.completed == true? "Completed" : "Mark as completed"}</button>
                    </div>
            })}
        </div>
    )
}