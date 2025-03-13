import React, { useState } from 'react'
import './body.css'

export default function Todo() {
  const [todos, setTodos] = useState([])

  const savedata = (e) => {
    e.preventDefault()
    let tname = e.target.todoname.value;
    if (!todos.includes(tname) && tname.length > 0) {
      setTodos([...todos, tname])

    } else {
      alert('Todo already exists or empty')
    }
  }

  let Data = todos.map((v, i) => {
    return (
      <Todoitem value={v} key={i} todoIndex={i} todos={todos} setTodos={setTodos} />
    )
  })

  return (
    <>
      <div className="todo-container w-[90%] border-2 border-gray-800 rounded-lg p-4 mx-auto mt-10 mb-10">
        <h1 className='text-5xl text-center bg-violet-500 text-white rounded-2xl p-2'>To-Do List</h1>
        <form className="todo-form flex justify-center items-center" onSubmit={savedata}>
          <input type="text" className="todo-input w-[70%] border-2 border-gray-600 m-2 rounded-lg p-3" placeholder="Add a new todo..." name='todoname' />
          <button type="submit" className="todo-btn w-[20%] bg-violet-500 text-white border-2 border-violet-500 rounded-lg p-2 m-2 text-2xl cursor-pointer">
            Add
          </button>
        </form>
        <div className="todo-list w-[90%] mx-auto mt-5">
          <ul>
            {Data}
          </ul>
        </div>
      </div>
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
    <li className={`todo-li bg-gray-200 text-2xl p-3 m-2 rounded-lg relative text-left ${isdone ? 'line-through decoration-red-600' : ''}`} onClick={() => setisdone(!isdone)}>
      {value}
      <span className='cursor-pointer right-4 absolute' onClick={deletetodo}>&times;</span>
    </li>
  )
}