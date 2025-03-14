import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import Count from './body'
import Header from './Header'
import { faHeadset, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Todo from './todo'

export default function App() {

  return (
    <>
      <Header />
      <Count />
      <Help />
      <Todo />
    </>
  )
}



function Help() {
  let [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='fixed bottom-[5rem] right-4 p-3 bg-violet-500 text-white rounded-2xl cursor-pointer text-2xl' onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon={faHeadset} />
      </div>
      <div className={`fixed top-0 left-0 w-full h-full bg-[#151517b2] bg-opacity-25 ${showModal ? '' : 'modal'}`}></div>
      <div className={`bg-white p-3 rounded-lg max-w-[20rem] w-full modal-body h-[400px] ${showModal ? 'm-change' : ''}`}>
        <FontAwesomeIcon icon={faXmark} className='cursor-pointer relative float-right' onClick={() => setShowModal(false)} />
        <h1 className='text-lg'>Model Component</h1>
        <p>Model Content</p>
      </div>
    </>
  )
}


