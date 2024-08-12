import React from 'react';
import './App.css';  // Import App.css here

function Modal(props) {
  if (props.modalState) {
    return (
      <main id="modal-background">
        <section id="modal-content">
          I am a modal!
          <button onClick={props.handleClick}>Close Modal</button>
        </section>
      </main>
    );
  } else {
    return <div style={{ display: 'none' }}></div>;
  }
}

export default Modal;
