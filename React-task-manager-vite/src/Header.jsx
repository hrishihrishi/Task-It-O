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

    const handleClick = () => {
        let taskDetails = {
            id: Date.now(),
            taskName,
            isCompleted: false
        }
        setListArray([...listArray, taskDetails])
        setTaskName('')
    }
    function handleDelete(id) {
        setListArray(listArray.filter(item => item.id !== id))
    }

    // clicked from ToDoList
    function handleEdit(id) {
        setModalVisible(true)
        setTaskToEdit(listArray.find(task => task.id === id))
    }
    function toggleModalVisibility() {
        setModalVisible(!modalVisible)
    }
    function EditTaskName(id, newTaskName){
        setListArray(listArray.map(task => task.id===id ? {...task, taskName: newTaskName} : task))
        setModalVisible(false)

    }
    function handleCompleted(id) {
        setListArray(listArray.map(item => {
            return item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        }))
    }

    return (
        <>
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
            <ToDoList
                listArray={listArray}
                handleCompleted={handleCompleted}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            {
                modalVisible && createPortal(<Modal editTaskName={EditTaskName} taskDetails={taskToEdit} handleClose={toggleModalVisibility} />, document.body)
            }
        </>

    )
}
