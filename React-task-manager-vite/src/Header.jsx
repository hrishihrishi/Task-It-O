import React, { useState } from 'react'
import './index.css'
import ToDoList from './ToDoList'
import { createPortal } from 'react-dom';
import Modal from './Modal';


export default function Header() {
    const [listArray, setListArray] = useState([])
    const [taskName, setTaskName] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

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
    function handleEdit(id) {
        console.log(id)
        setModalVisible(true)
    }
    function toggleModalVisibility() {
        setModalVisible(!modalVisible)
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
                <button className='btn-primary bg-fuchsia-600' onClick={handleClick}>Add</button>
            </article>
            <ToDoList
                listArray={listArray}
                handleCompleted={handleCompleted}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            {
                modalVisible && createPortal(<Modal handleClose={toggleModalVisibility} />, document.body)
            }
        </>

    )
}
