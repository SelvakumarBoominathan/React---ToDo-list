import React from 'react';
import "./InputsBar.css";

const InputsBar = () => {
  return (
    <div className='Header-container'>
      <h3 className='Title-Name'>My ToDo</h3>
      <form className='Input-Form'>
        <input type='text' placeholder='Enter task Name'></input>
        <input type='text' placeholder='Enter Description'></input>
        <button id='Add-button'>Add to list</button>
      </form>
    </div>
  )
}

export default InputsBar;
// 