import React, { useState, useEffect } from 'react'
import './ReactParty.css'

const ReactParty = ({ delay, duration, showDefault, limit, content, onStart, onStarted, onCompleted }) => {
    
    const [partyShowDefault, setPartyShowDefault] = useState(showDefault)
    const [animationDuration, setAnimationDuration] = useState(duration)
    const [animationDelay, setAnimationDelay] = useState(delay)

    const onAnimationStart = (onStart = () => {}) => {
        return onStart()
    }

    const onAnimationStarted = (onStarted = () => {}) => {
        return onStarted()
    }

    const onAnimationCompleted = (onCompleted = () => {}, delay = 0) => {
        setTimeout(() => {
            setPartyShowDefault(false)
            return onCompleted()
        }, [delay * 2])
    }

    const onDurationAnimation = (duration = 0) => {
        setAnimationDuration(duration)
    }

    const onDelayAnimation = (delay = 0) => {
        setAnimationDelay(delay)
    }

    useEffect(() => {
        onAnimationStart(onStart)
        onAnimationStarted(onStarted)
        onAnimationCompleted(onCompleted, delay)

        onDelayAnimation(delay)
        onDurationAnimation(duration)
    }, [])

    if (!partyShowDefault) return <></>
    
    return (
        <>
            {Array(limit).fill('').map((e, i) => (
                <React.Fragment key={i}>
                    <PartyList duration={animationDuration} delay={animationDelay} content={content} />
                </React.Fragment>
            ))}
        </>
    )
}

const PartyList = ({ duration= 0, delay = 0, content }) => {
    
    const durationAnimation = duration / 1000
    const delayAnimation = delay / 1000
    const [style, setStyle] = useState({})

    useEffect(() => {
        let left = Math.floor(Math.random() * 90)
        let animationDuration = (Math.random() * durationAnimation).toFixed(durationAnimation)
        setStyle({display: 'block', position: 'absolute', left: `${left}%`, animation: `bottomToTop 2s ease`, animationDelay: `${animationDuration}s`})
    }, [])
    
    return (
        <div style={style} id='party__mainContainer' className='mainContainer'>
            <p className='content'>{content}</p>
        </div>
    )
}

export default ReactParty
