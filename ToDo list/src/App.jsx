import { useState } from 'react';
import './App.css';
import InputsBar from './components/InputsBar/InputsBar';
import Body from './components/Body/Body';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <InputsBar onAddTask={handleAddTask} />
      <Body tasks={tasks} />
    </>
  )
}

export default App;
