import React, { useState } from 'react'
import './body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Pageload from './pageload'

export default function Todo() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  const savedata = (e) => {
    e.preventDefault()
    let tname = e.target.todoname.value;
    if (!todos.includes(tname) && tname.length > 0) {
      setTodos([...todos, tname])
      e.target.todoname.value = ''

    } else {
      alert('Todo already exists or empty')
    }
  }

  let Data = todos.map((v, i) => {
    return (
      <Todoitem value={v} key={i} todoIndex={i} todos={todos} setTodos={setTodos} />
    )
  })
  

  setTimeout(()=>{
    setLoading(false)
  },1000)

  return (
    <>
      {loading? <Pageload/> : null}
      {!loading?
      <div className="todo-container w-[90%] rounded mx-auto m-8">
        <h1 className='lg:text-3xl text-2xl font-bold text-center bg-violet-500 text-white rounded p-2 mb-3 font-mono'>To-Do List</h1>
        <form className="todo-form lg:w-[90%] flex gap-3 items-center mx-auto my-2 p-3" onSubmit={savedata}>
          <input type="text" className="todo-input lg:grow-3 grow border-2 border-gray-600 rounded-lg p-3" placeholder="Add a new todo..." name='todoname' />
          <button type="submit" className="todo-btn lg:grow-1 grow bg-violet-500 text-white border-2 border-violet-500 rounded-lg p-2 lg:text-2xl text-xl cursor-pointer font-mono">
            Add
          </button>
        </form>
        <div className="todo-list w-[90%] mx-auto mt-5">
          <ul>
            {Data}
          </ul>
        </div>
      </div>
      :null}
    </>
  )
}


function Todoitem({ value, todoIndex, todos, setTodos }) {
  let [isdone, setisdone] = useState(false)
  const deletetodo = () => {
    let newtodos = todos.filter((v, i) => i !== todoIndex)
    setTodos(newtodos)
  }
  return (
    <li className={`todo-li bg-gray-200 text-2xl p-3 m-2 rounded-lg relative text-left ${isdone ? 'line-through decoration-gray-400 text-gray-400' : ''}`} onClick={() => setisdone(!isdone)}>
      {value}
      <span className='cursor-pointer right-4 absolute' onClick={deletetodo}><FontAwesomeIcon icon={faTrash}/></span>
    </li>
  )
}