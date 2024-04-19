import { useState } from 'react';
import './App.css';
import InputsBar from './components/InputsBar/InputsBar';
import Body from './components/Body/Body';
import 'bootstrap/dist/css/bootstrap.min.css';



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
