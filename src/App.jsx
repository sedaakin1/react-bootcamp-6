import { useState } from "react";

function App() {
    const [state, setState] = useState("bu bir javascript eğitimidir");

    function handleClick() {
        setState("bu bir react eğitimidir")
    }

  return (<div>
    <h1>{state}</h1>
    <button onClick={handleClick}>değiştir</button>
  </div>
  );
}

export default App;
