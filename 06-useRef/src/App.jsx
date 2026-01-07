import { useState } from "react";
import { useRef } from "react";

function App() {
    let [text, setText] = useState('Bikram Shreyosi');
    let myRef = useRef(null);
    const focusText = () => {
      myRef.current.focus();
    }
    const copyText = () => {
      myRef.current.select();
      navigator.clipboard.writeText(myRef.current.value);
    };
    return (
        <>
          {/* Uncontrolled Input: */}
          {/* <input ref={myRef} defaultValue="Bikram Sheryosi" /> */}
          {/* Controlled Input: */}
          <input ref={myRef} value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => focusText()}>Focus Input</button>
          <button onClick={() => copyText()}>Copy Input</button>
        </>
    );
}
export default App;