import { useEffect } from 'react'
import { useState, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const prevValue = useRef(null);
  const addValue = () => {
    prevValue.current = count;
    setCount(prev => prev + 1);
  }
  useEffect(() => {
    console.log('Component Mounted!');
  }, []);
  useEffect(() => {
    console.log("Count changed:", count);
    console.log("Previous Value changed:", prevValue.current);
  }, [count]);
  return (
    <>
      <h1>Current Value: {count}!</h1>
      <button onClick={addValue}>Add Value</button>
      {prevValue.current !== null && (<p>Previous Value: {prevValue.current}</p>)}
    </>
  )
}

export default App
