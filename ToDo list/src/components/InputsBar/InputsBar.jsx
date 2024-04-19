import React, { useState } from 'react';
import "./InputsBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const InputsBar = ({ onAddTask }) => {

  const [todoName, settodoName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    event.preventDefault();
    onAddTask({ todoName, description });

    settodoName('');
    setDescription('');
  }

  return (
    <div className='Header-container'>
      <h3 className='Title-Name'>My ToDo</h3>
      <form className='Input-Form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter task Name' value={todoName} onChange={(e) => settodoName(e.target.value)}></input>
        <input type='text' placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
        <button id='Add-button'>Add to list</button>
      </form>
    </div>
  )
}


export default InputsBar;