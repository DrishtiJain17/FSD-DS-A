import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = ({name, email, phnno})=> {

  return (
    <>
      <div>
        <h2>Student Details</h2>
        <h2>{name}</h2>
        <h2>Email : {email}@gmail.com</h2>
        <h2>Phn no. {phnno}</h2>
      </div>
    </>
  )
}

export default App
