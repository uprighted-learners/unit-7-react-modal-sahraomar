import {useState} from 'react'
import Modal from './Modal.jsx'



function App() {
  const [modalState, setModalState] = useState(false)

  const handleClick = () =>{
    setModalState(!modalState)
    
    if(modalState) {
      setModalState(false)
    } else {
      setModalState(true)
    }
  }
  
  return (
    <div>
    <main>
    <button onClick={handleClick}>Open Modal</button>
    <p>This is the placeholder text</p>
    <Modal modalState={modalState} handleClick={handleClick}/>
    </main>
  
    </div>
   
  );
}

export default App;
