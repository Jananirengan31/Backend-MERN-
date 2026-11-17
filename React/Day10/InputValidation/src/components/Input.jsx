import { useState } from "react";

const Input =()=>{

    const [todo,setTodo]=useState("")

    const handleClick =(e)=>{

       setTodo(e.target.value)
    }

    return(<>
    
    
    <div className = "border-2 flex flex-col mx-2">
        <h1>{todo}</h1>
        

        <input onChange={handleClick} type="text" />
    </div>



    
    </>)
}

export default Input;