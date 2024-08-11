import {useState} from 'react'
import './App.css';


const Modal = (props) => {
if(props.modalState === true) {
    return(
        <main className="modal-background">
            



        </main>
    )
}

    return (
    <div>Modal</div>
  )
}

export default Modal