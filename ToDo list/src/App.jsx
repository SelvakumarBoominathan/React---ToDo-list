import { useState } from 'react';
import './App.css';
import InputsBar from './components/InputsBar/InputsBar';
import Body from './components/Body/Body';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputsBar />
      <Body />

    </>
  )
}

export default App;
