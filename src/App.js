import React, { useState } from 'react'
import ReactParty from './components/ReactParty/ReactParty'

const App = () => {

  return (
    <div>
      <h1>React Party</h1>
      <button>Show Party</button>
      <ReactParty
        onStart={() => console.log('This is a different thing!')}
        onStarted={() => console.log('The animation is started boi!')}
        onCompleted={() => console.log('The animation is completed baby boi!')}
        showDefault={true}
        limit={100} 
        content={'🔥'} 
        duration={2000} // seconds
        delay={1000} // milisecond
      />
      <ReactParty 
        showDefault={true} 
        limit={10} 
        content={'🎉'} 
        duration={2000} // seconds
        delay={2000} // milisecond
      />
      <ReactParty 
        showDefault={true} 
        limit={50} 
        content={'👽'} 
        duration={2000} // seconds
        delay={2000} // milisecond
      />
    </div>
  )
}

export default App
