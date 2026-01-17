import React from 'react'
import './index.css'
import { cn } from '../lib/utils.js'

export default function ToDoItem({item, handleCompleted, handleEdit, handleDelete}) {
    return (

        // ToDoItem tag that displays task
        <article className={cn('todo-item', item.isCompleted===false? 'bg-yellow-100' : 'bg-green-200')}>
            <h3 className='text-xl font-bold mx-4'>{item.taskName}</h3>


            {/* 5.2 ❖ Implement event handling for marking a to-do item as completed. (10 marks) */}
            <button className={cn('btn-primary', item.isCompleted===false? 'bg-green-500' : 'bg-yellow-400 text-black')} onClick={() => handleCompleted(item.id)}>{item.isCompleted===false? 'Mark as completed' : 'Unmark'}</button>

            {/* 5.4 ❖ Implement a feature to edit existing to-do items. (10 marks) */}
            <button className='btn-primary bg-blue-500' onClick={() => handleEdit(item.id)}>Edit</button>

            {/* 5.3 ❖ Implement event handling for deleting a to-do item. (10 marks) */}
            <button className='btn-primary bg-red-500' onClick={() => handleDelete(item.id)}>Delete</button>
        </article>
    )
}

