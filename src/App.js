import React, { useState } from 'react'
import ReactParty from './components/ReactParty/ReactParty'

const App = () => {

  const [toggle, setToggle] = useState(false)

  const showPartyHandler = () => {
    setToggle(true)
  }
  
  return (
    <div>
      <h1>React Party</h1>
      <button onClick={showPartyHandler}>Show Party</button>
      <ReactParty
        showDefault={true}
        limit={10} 
        content={'🔥'} 
        delay={2000} // milisecond
      />
      <ReactParty 
        showDefault={true} 
        limit={10} 
        content={'🎉'} 
        delay={2000} // milisecond
      />
      <ReactParty 
        showDefault={true} 
        limit={10} 
        content={'👽'} 
        delay={2000} // milisecond
      />
    </div>
  )
}

export default App
