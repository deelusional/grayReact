import React from 'react'

const Content = () => {
  const handleNameChange = () => {
    const names = ['Asshat', 'Dickhead', 'Fucktard'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  
  return (
    <main>
      <p>
        This is the content component { handleNameChange()  }!
      </p>
    </main>
  )
}

export default Content