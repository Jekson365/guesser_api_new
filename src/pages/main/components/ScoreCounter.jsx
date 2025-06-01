import React, { useContext } from 'react'
import Stat from '../../../commons/Stat'
import { ScoreContext } from '../Main'

function ScoreCounter() {
    const { score } = useContext(ScoreContext);
    return (
        <>
            <Stat text={score || 0} />
        </>
    )
}

export default ScoreCounter