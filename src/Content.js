import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Asshat', 'Dickhead', 'Fucktard'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  
  const handleClick2 = (name) => { 
    console.log(`${name} was clicked!`);
  }
  const handleClick = () => { 
    console.log('You clicked it!');
  }
  const handleClick3 = (e) => { 
    // to get the event target
    console.log(e.target);
  }

  return (
    <main>
      <p>
        This is the content component { handleNameChange()  }!
      </p>
      <button onClick={handleClick}>Click here</button>
      {/* Anonymous function below */}
      <button onClick={() =>  handleClick2('Asshat')  }>Click here</button>
      <button onClick={(e) =>  handleClick3(e)  }>Click here</button>
    </main>
  )
}

export default Content