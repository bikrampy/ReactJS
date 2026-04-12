import { useState } from "react";
export default function App2() {
  let [person, setPerson] = useState({ name: "Shreyosi", age: 100 });
  let [isOn, setIsOn] = useState(false);

  function handleIncreaseAge() {
    let newPerson = {
      name: person.name,
      age: person.age + 1,
    };
    setPerson(newPerson);
  }

  function handleIsOn() {
    setIsOn(isOn => !isOn)
  }

  return (
    <>
      <h1>⚛️</h1>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <h2>{isOn? 'ON': 'OFF'}</h2>
      <button onClick={handleIsOn}>Toggle</button>
    </>
  );
}
