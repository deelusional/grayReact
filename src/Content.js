import React from 'react'
import { useState } from 'react';

const Content = () => {
  // name (would be the 'getter') and setName (would be the 'setter')
  const [name, setName] = useState('Moron');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Asshat', 'Dickhead', 'Fucktard'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = () => { 
    setCount(count + 1);
    console.log(count);
  }
  
  const handleClick2 = (name) => { 
    console.log(`${name} was clicked!`);
  }
  
  const handleClick3 = (e) => { 
    // to get the event target
    console.log(e.target.innerText);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        {/* to use React useState (below) */}
        Hello {name}!

        {/* Below was using the vanilla js way */}
        {/* Hello {handleNameChange()}! */}
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      {/* Anonymous function below */}
      {/* <button onClick={() =>  handleClick2('Asshat')  }>Click here</button> */}
      <button onClick={(e) =>  handleClick3(e)  }>Click here</button>
    </main>
  )
}

export default Content