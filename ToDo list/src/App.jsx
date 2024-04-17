import { useState } from 'react';
import './App.css';
import InputsBar from './components/InputsBar/InputsBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputsBar />
    </>
  )
}

export default App;
