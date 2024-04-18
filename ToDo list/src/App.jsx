import { useState } from 'react';
import './App.css';
import InputsBar from './components/InputsBar/InputsBar';
import Body from './components/Body/Body';
import Dropdown from './components/Dropdown/Dropdown'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputsBar />
      <Body />
      <Dropdown />
    </>
  )
}

export default App;
