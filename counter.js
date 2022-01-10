import React, { useState } from "react";

function App() {

  const [Count, setCount]=useState(0);

  const Add=() => {
    setCount(Count+1);
  };

  
const Sub=() => {
  if(Count>0){
  setCount(Count-1);
  }else {
    setCount(0);
  }
  };
  
  
  
  return (
    <div>
          <h1>{Count}</h1>
          <div className='btn-div'>
            <button onClick={Add}>Add</button>
            <button onClick={Sub}>Sub</button>
            
          </div>
        </div>
  );
}
    
export default App;
