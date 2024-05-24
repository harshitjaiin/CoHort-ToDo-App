import {useState} from "react";


export function CreateTodo(){

    const[title , setTitle] = useState(""); 
    const[desc , setDesc] = useState(""); 
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Title" onChange={function(e){
            const val = e.target.value;
            setTitle(val);
        }}></input><br/>

        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="Description" onChange={function(e){
            const val = e.target.value;
            setDesc(val);
        }}></input><br/>

        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo" , {
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    desc:desc  
                }),
                headers:{
                    "Content-type": "application/json"
                } 
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo Added");
            })
        }}>Add a Todo</button>
    </div>
}