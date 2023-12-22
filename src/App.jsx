// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <>
    <div>
      <header>
        <div className="px-8 py-8 text-justify text-white jumbotron">
          <h1 className=''>
            My Todo<br />
            <span>App🕗📜</span>
          </h1>
        </div>
      </header> 
    </div>

    <div className="grid bg-gray-200">
      
      <div className='border-4 border-indigo-500/75"'>
        <h1 className="text-3xl font-bold">
          Hari ini mau melakukan apa?
        </h1>
      </div>

      <Navbar/>

      <TodoList/>

    </div>
    </>
  )
}

export default App