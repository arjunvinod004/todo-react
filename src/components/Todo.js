import React, { useState } from 'react'
import './todo.css'
function Todo() {
  const[task,setTask]=useState([]);
  const[newtask,setnewTask]=useState("");
  const handleInput=(e)=>{
setnewTask(e.target.value)
  }
  const handleTask=()=>{
if(newtask.trim()){
  setTask([...task,newtask])
  setnewTask("")
}
  }
  const handleDelete=(index)=>{
setTask(task.filter((item,itemIndex)=>itemIndex!= index))
  }
  return (
    <div className='container'>
       <h1>Todo App</h1>
       <div className='input-container'>
        <input type='text' value={newtask}
        placeholder='Enter a task' onChange={handleInput} />
        <button className='addd' onClick={handleTask}> add</button>

       </div>
      
       <ul className='task-list'>
{
  task.map((task,index)=>(
<li key={index}>
  {task}
  <button onClick={()=>handleDelete(index)} className='delete-btn'>Delete</button>
</li>
  ) )
}
       </ul>
    </div>
  )
}

export default Todo

