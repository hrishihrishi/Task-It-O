import React from 'react'
import './index.css'
import { cn } from '../lib/utils.js'

export default function ToDoItem({item, handleCompleted, handleEdit, handleDelete}) {
    return (
        <article className={cn('todo-item', item.isCompleted===false? 'bg-yellow-100' : 'bg-green-200')}>
            <h3 className='text-xl font-bold mx-4'>{item.taskName}</h3>
            <button className={cn('btn-primary', item.isCompleted===false? 'bg-green-500' : 'bg-yellow-400 text-black')} onClick={() => handleCompleted(item.id)}>{item.isCompleted===false? 'Mark as completed' : 'Unmark'}</button>
            <button className='btn-primary bg-blue-500' onClick={() => handleEdit(item.id)}>Edit</button>
            <button className='btn-primary bg-red-500' onClick={() => handleDelete(item.id)}>Delete</button>
        </article>
    )
}

