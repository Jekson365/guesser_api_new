import React from 'react'
import SubmitButton from '../../../commons/SubmitButton'
import Stat from '../../../commons/Stat'
import ScoreCounter from './ScoreCounter'

function Controls({ gameover, handleSubmit, data, showResult }) {
    const playAgain = () => {
        window.location.reload()
    }
    return (
        <>
            <div className="testing"
                style={{
                    position: "absolute",
                    bottom: "50px",
                    left: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translate(-50%,0)",
                    gap: "20px"
                }}
            >
                {!showResult && (<>
                    <SubmitButton type={'bg-primary'} handler={handleSubmit} text={'დადასტურება'} />
                </>)}
                <ScoreCounter />
                {!showResult && (<>
                    <SubmitButton type={'bg-primary'} text={(data?.questionsRemaining || 5) + " / 5"} />
                </>)}
                {showResult && <SubmitButton type={'bg-danger'} handler={playAgain} text={'ხელახლა'} />}
                {/* <Stat type={'danger'} text={data?.distance || 0} /> */}
            </div>
        </>
    )
}

export default Controls