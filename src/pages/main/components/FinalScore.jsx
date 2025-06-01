import { Stack } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import SubmitButton from '../../../commons/SubmitButton'
import CountUp from 'react-countup'
import { CurrentUserContext } from '../../../App'
import UseUpdateScore from '../../../hooks/users/UseUpdateScore'

function FinalScore({ score, playAgain, showResult }) {
    const { currentUser } = useContext(CurrentUserContext)
    const { updateScore } = UseUpdateScore();

    useEffect(() => {
        if (score > currentUser.highScore) {
            updateScore({ userName: currentUser.name, highScore: score })
        }
    }, [])

    const gifs = [
        {
            type: "weak",
            texts: [
                "შეგირცხვა ნამუსი",
            ],
            gs: [
                "https://media0.gifebi.ge/e1e3c163-f789-4c70-b797-61edb7c7e339.gif"
            ]
        },
        {
            type: "strong",
            texts: [
                "რაც კაია - კაია!"
            ],
            gs: [
                "https://media0.gifebi.ge/7f896240-cf04-44a5-bd27-488964fe95fa_w245.gif"
            ]
        },
        {
            type: "very-strong",
            texts: [
                "ვისი ბიჭი ხარ?"
            ],
            gs: [
                "https://media0.gifebi.ge/c38b6a13-d7e9-4d10-b59a-2d679b9b5a09.gif",

            ]
        }
    ]


    return (
        <>

            <div className="your-score"
            >
                <Stack direction={'column'} alignItems={'center'} className='stats' gap={'20px'}>
                    <div className="gif-place">
                        <h3>{score < 4000 ? gifs[0].texts[0] : score > 4000 && score < 4500 ? gifs[1].texts[0] : score > 4500 ? gifs[2].texts[0] : gifs[2].texts[0]}</h3>
                        <img src={score < 4000 ? gifs[0].gs[0] : score > 4000 && score < 4500 ? gifs[1].gs[0] : score > 4500 ? gifs[2].gs[0] : gifs[2].gs[0]} />
                    </div>
                    <CountUp duration={2} end={score} className='score' />
                    <Stack direction={'row'} gap={'20px'}>
                        <SubmitButton type={'bg-primary'} text={'ხელახლა'} handler={playAgain} />
                        <SubmitButton type={'bg-danger'} text={'შედეგი'} handler={showResult} />
                    </Stack>
                </Stack>
            </div>
        </>
    )
}

export default FinalScore