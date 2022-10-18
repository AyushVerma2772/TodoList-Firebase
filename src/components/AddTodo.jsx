import React, { useState } from 'react';
import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';


const AddTodo = () => {

    const colName = 'todos';
    const colRef = collection(db, colName);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const today = new Date();


    const addTodo = async (e) => {
        e.preventDefault();
        if (title === "") {
            alert("Title can't be empty");
        }
        else {
            addDoc(colRef, {
                title: title,
                description: desc,
                time: `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}  ${today.getHours()} : ${today.getMinutes()}`
            });
            alert("Todo Added");
            setTitle("");
            setDesc("");
        }

    }

    return (
        <>
            <div className="row my-2">
                <div className="col-12">
                    <form className='container'>
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control my-2" id="exampleFormControlInput1" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description' value={desc} onChange={e => setDesc(e.target.value)} ></textarea>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col my-2">
                                <button className='btn btn-primary align-middle' onClick={e => addTodo(e)}>Add<i className="bi bi-plus-lg"></i></button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default AddTodo