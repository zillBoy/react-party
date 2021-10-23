import React, { useState, useEffect } from 'react'
import './ReactParty.css'

const ReactParty = ({ delay, showDefault, limit, content }) => {
    
    if (!showDefault) return <></>
    
    return (
        <>
            {Array(limit).fill('').map((e, i) => (
                <React.Fragment key={i}>
                    <PartyList delay={delay} content={content} />
                </React.Fragment>
            ))}
        </>
    )
}

const PartyList = ({ delay = 2000, content }) => {
    
    const delayAnimation = delay / 1000
    const [style, setStyle] = useState({})

    useEffect(() => {
        let left = Math.floor(Math.random() * 100)
        let animationDelay = (Math.random() * delayAnimation).toFixed(delayAnimation)
        setStyle({display: 'block', position: 'absolute', left: `${left}%`, animation: `bottomToTop 2s ease`, animationDelay: `${animationDelay}s`})
    }, [])
    
    return (
        <div style={style} id='party__mainContainer' className='mainContainer'>
            <p className='content'>{content}</p>
        </div>
    )
}

export default ReactParty
