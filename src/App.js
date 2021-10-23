import React, { useState } from 'react'
import ReactParty from './components/ReactParty/ReactParty'

const App = () => {

  const [show, setShow] = useState(false)
  const [showParty, setShowParty] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)

  return (
    <div>
      <h1>React Party</h1>
      <button onClick={() => setShow(true)}>Show Party 🔥</button>
      <button onClick={() => setShowParty(true)}>Show Party 🎉</button>
      <button onClick={() => setShowEmoji(true)}>Show Party 🥳</button>
      {show && <ReactParty
        // onStart={onStartAnimation}
        // onStarted={() => console.log('animation is started!')}
        onCompleted={() => setShow(false)}
        showDefault={true}
        limit={200} 
        content={'🔥'} 
        duration={4000} // seconds
        // delay={3000} // milisecond
        size={36}
      />}
      {showParty && <ReactParty
        onCompleted={() => setShowParty(false)}
        showDefault={true}
        limit={2}
        content={'🎉'} 
        duration={3000}
        size={90}
      />}
      {showEmoji && <ReactParty
        onCompleted={() => setShowEmoji(false)}
        showDefault={true}
        limit={200} 
        content={'🥳'}
        duration={10000}
        delay={1000}
        size={46}
      />}
    </div>
  )
}

export default App
