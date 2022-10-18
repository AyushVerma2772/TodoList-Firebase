import React, { useRef, useState } from 'react';
import { db } from '../firebase-config';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';



const Card = ({ title, desc, time, id }) => {

    const titleRef = useRef();
    const descRef = useRef();
    const [edit, setEdit] = useState(true);

    const colName = 'todos';

    //! Update user 
    const updateTodo = async (todoId) => {
        if (edit) {
            titleRef.current.style.border = '1px solid black';
            descRef.current.style.border = '1px solid black';
            titleRef.current.setAttribute("contenteditable", "true");
            descRef.current.setAttribute("contenteditable", "true");
            setEdit(false)
        }

        else {
            titleRef.current.style.border = '0';
            descRef.current.style.border = '0';
            titleRef.current.setAttribute("contenteditable", "false");
            descRef.current.setAttribute("contenteditable", "false");

            if (titleRef.current.innerText === "") {
                alert("Title can't be empty");
            }

            else {
                const docRef = doc(db, colName, todoId);
                await updateDoc(docRef, {
                    title: titleRef.current.innerText,
                    description: descRef.current.innerText
                })
                alert("Todo Updated");
                setEdit(true)
            }
        }

    }

    //! Delete todo
    const deleteTodo = async (todoId) => {
        const docRef = doc(db, colName, todoId)
        await deleteDoc(docRef);
        alert("Todo deleted");
    }

    return (
        <>
            <div className="col-lg-4 col-md-6 mt-4 d-flex justify-content-center">
                <div className="card border-success" style={{ maxWidth: '18rem' }}>
                    {/* Header */}
                    <div className="card-header bg-transparent border-success fw-semibold container">
                        <div className="row">
                            <div className="col-6 overflow-hidden d-flex justify-content-start"
                                ref={titleRef}>{title}</div>
                            <div className="col-6 overflow-hidden d-flex justify-content-end">{time}</div>
                        </div>
                    </div>
                    {/* Body */}
                    <div className="card-body text-success p-2" style={{ height: '128px', overflow: 'auto', width: '18rem' }}>
                        <p className="card-text" ref={descRef}>{desc}</p>
                    </div>
                    {/* Footer */}
                    <div className="card-footer bg-transparent border-success container">
                        <div className="row">
                            <div className="col-6 text-center"><button className='btn btn-sm btn-warning' onClick={() => { updateTodo(id) }}> {edit ? 'Edit' : 'Done'} <i className="bi bi-pencil-fill"></i></button></div>
                            <div className="col-6 text-center"><button className='btn btn-sm btn-danger ' onClick={() => deleteTodo(id)}>Delete <i className="bi bi-trash-fill"></i> </button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card