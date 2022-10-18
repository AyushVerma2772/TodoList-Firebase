import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Card from './Card';
import { db } from '../firebase-config';
import {collection, getDocs} from 'firebase/firestore';

const Home = () => {

  const [todos, setTodos] = useState([]);
  const colName = "todos";
  const colRef = collection(db, colName);

  useEffect(() => {

    const getData = async () => {
      const data = await getDocs(colRef);
      const dataArr = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      // console.log(dataArr);
      setTodos(dataArr);
    }
    
    getData();
    // eslint-disable-next-line
  }, [])

  

  return (
    <>
      <div className="container-fluid position-relative">
        <div className='container'>

          <h1 className='col-12'>Meri TodoList</h1>

          <AddTodo />

          <h2 className='my-1'>Your Todo List: </h2>
        </div>

        <div className='container p-2'>
          <div className="row justify-content-center">

            {
                todos.map((ele) => {
                  return <Card key={ele.id} title={ele.title} desc={ele.description} id={ele.id} time={ele.time} />
                })
            }

          </div>

        </div>



      </div>
    </>
  )
}

export default Home