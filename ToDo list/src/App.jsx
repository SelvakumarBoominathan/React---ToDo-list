import React, { useState } from 'react';
import './App.css';
import InputsBar from './components/InputsBar/InputsBar';
import Body from './components/Body/Body';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <InputsBar onAddTask={handleAddTask} />
      <Body tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}

export default App;
