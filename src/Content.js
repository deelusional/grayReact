import React from 'react'
import { useState } from 'react';

const Content = () => {
  // name (would be the 'getter') and setName (would be the 'setter')
  const [name, setName] = useState('Moron');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Asshat', 'Dickhead', 'Fucktard', 'Hastin Student', 'Idiot'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = () => { 
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  }
  
  const handleClick2 = () => { 
    console.log(count);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        {/* to use React useState (below) */}
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>
      <button onClick={handleClick2}>Click here</button>
    </main>
  )
}

export default Content