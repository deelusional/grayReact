import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Asshat', 'Dickhead', 'Fucktard'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  
  const handleClick = () => { 
    console.log('You clicked it!');
  }

  return (
    <main>
      <p>
        This is the content component { handleNameChange()  }!
      </p>
      <button onClick={ handleClick() }>Click here</button>
    </main>
  )
}

export default Content