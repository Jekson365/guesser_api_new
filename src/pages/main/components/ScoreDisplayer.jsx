import React from 'react'
import CountUp from 'react-countup'

function ScoreDisplayer({ score }) {
    return (
        <div className='your-score'>
            <CountUp className='score' duration={2} end={score} />
        </div>
    )
}

export default ScoreDisplayer