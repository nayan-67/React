import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import Count from './body'
import Header from './Header'
import { faHeadset, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Todo from './todo'
import modal_img from './assets/Image/wel.png'
import { Route, Routes, useParams } from 'react-router-dom'
import error from './assets/Image/error.png'
import Pageload from './pageload'
import Faq from './faq'
import Blog from './blog'
import Cardetails from './cardetails'
import Passgen from './passgen'
import Weather from './weather'

export default function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return (
    <>
      <Header />
      {loading? <Pageload /> : null}
      <Help />
      <div>
        <Routes>
          <Route path='/' element={<Count />} />
          <Route path='todo' element={<Todo />} />
          <Route path='faq' element={<Faq />} />
          <Route path='pass' element={<Passgen />} />
          <Route path='weather' element={<Weather />} />
          <Route path='blog' element={<Blog />} />
          <Route path="/blog/:id" element={<Cardetails/>} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={
            <div className='flex justify-center items-center h-[80vh] '>
              <img src={error} alt="Error" className='w-90 h-auto' />
            </div>
          } />
        </Routes>
      </div>

    </>
  )
}



function Help() {
  let [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='fixed bottom-[2rem] right-4 p-3 bg-[#242424] text-[#fff] rounded-2xl cursor-pointer text-2xl z-50' onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon={faHeadset} />
      </div>
      <div className={`fixed top-0 left-0 z-50 w-full h-full bg-[#151517b2] bg-opacity-25  ${showModal ? '' : 'modal'}`} onClick={() => setShowModal(false)}></div>
      <div className={`bg-white p-3 z-50 rounded-lg max-w-[20rem] w-full modal-body h-[400px] ${showModal ? 'm-change' : ''}`}>
        <FontAwesomeIcon icon={faXmark} className='cursor-pointer relative float-right ml-70' onClick={() => setShowModal(false)} />
        <h1 className='text-2xl text-center'>Hello ! 🧑‍💻<br />How Are You ?<br /> <span className='text-[#4713f5d9] drop-shadow-[0.5px_-0.8px_#562ed8b0] font-["Bungee_Shade"]'>WELLCOME ! YOU ✨</span> </h1>
        <div ><img src={modal_img} alt="" className='h-[16rem] m-auto' /></div>
      </div>
    </>
  )
}


function User() {

  const { id } = useParams();
  return (
    <div className='flex justify-center items-center h-[80vh] font-["Ubuntu"] text-5xl'>
      <h1>Hello <span className='font-["Black_Ops_One"]'>{id}</span></h1>
    </div>
  )
}

