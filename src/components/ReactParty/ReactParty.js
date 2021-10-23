import React, { useState, useEffect } from 'react'
import './ReactParty.css'

const ReactParty = ({ delay = 0, duration, showDefault = true, limit, content, size, onStart, onStarted, onCompleted }) => {
    
    const [partyShowDefault, setPartyShowDefault] = useState(showDefault)
    const [animationDuration, setAnimationDuration] = useState(duration)
    const [animationDelay, setAnimationDelay] = useState(0)
    const [showAnimation, setShowAnimation] = useState(false)

    const onAnimationStart = (onStart = () => {}) => {
        onStart()
        onAnimationCompleted(onCompleted, duration)
    }

    const onAnimationStarted = (onStarted = () => {}) => {
        onStarted()
    }

    const onAnimationCompleted = (onCompleted = () => {}, duration = 0) => {
        setTimeout(() => {
            setTimeout(() => {
                setPartyShowDefault(false)
                return onCompleted()
            }, [duration * 1.5])
        }, [delay])
    }

    const onDurationAnimation = (duration = 0) => {
        setAnimationDuration(duration)
    }

    const onDelayAnimation = (delay = 0) => {
        
        console.log('delay: ', delay)

        setTimeout(() => {
            console.log('now called!')
            setShowAnimation(true)
            onAnimationStart(onStart)
            onAnimationStarted(onStarted)
            onDurationAnimation(duration)
        }, [delay])
    }

    useEffect(() => {
        onDelayAnimation(delay)
    }, [])

    if (!partyShowDefault) return <></>
    
    return (
        <>
            {showAnimation ? <>
                {Array(limit).fill('').map((e, i) => (
                    <React.Fragment key={i}>
                        <PartyList duration={animationDuration} delay={animationDelay} content={content} size={size} />
                    </React.Fragment>
                ))}
            </> : <></>}
        </>
    )
}

const PartyList = ({ duration= 0, size = 10, content }) => {
    
    const durationAnimation = duration / 1000
    const [style, setStyle] = useState({})
    const [contentStyle, setContentStyle] = useState({})

    useEffect(() => {        
        let left = Math.floor(Math.random() * 90)
        let animationDuration = (Math.random() * durationAnimation).toFixed(durationAnimation)
        setStyle({display: 'block', position: 'absolute', left: `${left}%`, animation: `bottomToTop 2s ease`, animationDelay: `${animationDuration}s`})
        setContentStyle({fontSize: `${size}px` })
    }, [])
    
    return (
        <div style={style} id='party__mainContainer' className='mainContainer'>
            <p style={contentStyle}>{content}</p>
        </div>
    )
}

export default ReactParty
