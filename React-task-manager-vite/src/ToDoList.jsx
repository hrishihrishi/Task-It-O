import ToDoItem from "./ToDoItem"
import React from 'react'
import './index.css'

export default function ToDoList({listArray, handleCompleted, handleEdit, handleDelete}){
    return (

        // If no tasks are available, displays a message.
        listArray.length === 0 ? <h2 className="text-xl align-center text-center top-1/2">No tasks available</h2> :

        // 4.2 map function. (5 marks)
        listArray.map((item)=>{

            // 4.3 each to-do item is displayed with a unique key. (5 marks)
            return <ToDoItem key={item.id} item={item} handleCompleted={handleCompleted} handleEdit={handleEdit} handleDelete={handleDelete}/>
        })
    )
}

