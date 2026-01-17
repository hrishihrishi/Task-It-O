import React, { useState } from 'react'
import './index.css'
import ToDoList from './ToDoList'
import { createPortal } from 'react-dom';
import Modal from './Modal';


export default function Header() {
    const [listArray, setListArray] = useState([])
    const [taskName, setTaskName] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [taskToEdit, setTaskToEdit] = useState(null)

    // Adds tasks --- clicked from Header 
    const handleClick = () => {
        let taskDetails = {
            id: Date.now(),
            taskName,
            isCompleted: false
        }
        setListArray([...listArray, taskDetails])
        setTaskName('')
    }

    // Deletes tasks --- clicked from ToDoItem 
    function handleDelete(id) {
        setListArray(listArray.filter(item => item.id !== id))
    }

    // Edits tasks --- clicked from ToDoItem 
    function handleEdit(id) {
        setModalVisible(true)
        setTaskToEdit(listArray.find(task => task.id === id))
    }

    function toggleModalVisibility() {
        setModalVisible(!modalVisible)
    }

    // Edits tasks --- clicked from Modal
    function EditTaskName(id, newTaskName){
        setListArray(listArray.map(task => task.id===id ? {...task, taskName: newTaskName} : task))
        setModalVisible(false)
    }

    // Marks tasks as completed  --- clicked from ToDoItem 
    function handleCompleted(id) {
        setListArray(listArray.map(item => {
            return item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        }))
    }

    return (
        <>
        {/* Header that takes Input and adds tasks */}
            <article>
                <input type="text"
                    className='input'
                    placeholder='Add a task'
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />

                {/* 5.1 ❖ Implement event handling for adding a new to-do item. (10 marks) */}
                <button className='btn-primary bg-fuchsia-600' onClick={handleClick}>Add</button>
            </article>
            
            {/* ToDoList that displays tasks */}
            <ToDoList
                listArray={listArray}
                handleCompleted={handleCompleted}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            
            {/* Modal that edits tasks */}
            {
                modalVisible && createPortal(<Modal editTaskName={EditTaskName} taskDetails={taskToEdit} handleClose={toggleModalVisibility} />, document.body)
            }
        </>

    )
}
