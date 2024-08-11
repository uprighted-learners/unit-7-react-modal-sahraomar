import React, {useState} from 'react'
import './App.css';
import Modal from './Modal.jsx'




function App() {
  const [modalState, setModalState] =useState(false)

  function handleClick(){
    if(modalState --- true) {
      setModalState(false)
    } else {
      setModalState(true)
    }
  }
  
  return (
    <>
    <main>
    <button onClick={handleClick}>Open</button>
    <p>This is the placeholder text</p>
    <Modal modalState={modalState} handleClick={handleClick}/>

    </main>
  

    </>
   
  )
}

export default App;
