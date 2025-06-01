import React from 'react'
import '../../styles/opening/opening.scss'
import { Stack } from '@mui/material'
import SubmitButton from '../../commons/SubmitButton'

function Opening() {
    const gifs = [
        "https://media0.gifebi.ge/ce9ca5de-b469-411c-a95f-034a6e235de6.gif",
        "https://media0.gifebi.ge/881ec173-62da-4faa-9af6-17d79c9d658b.gif",
        "https://media0.gifebi.ge/4a0d6da5-3e2e-4794-969b-30dad9bc102c.gif",
        "https://media0.gifebi.ge/57163e7c-90e7-4fea-a291-77e81f866e6d.gif"
    ]
    const startGame = () => {
        window.location.href = '/'
    }
    return (
        <>
            <div className="overlay"></div>
            <div className="main">
                <Stack direction={'column'} alignItems={'center'} textAlign={'center'} gap={'40px'}>
                    <h1>რამდენად კარგად იცი შენი ქვეყნის კუთხე-კუნჭული? 🤔 🇬🇪</h1>
                    <h3>თამაში შედგება 5 "კითხვა-ფოტოსაგან". მოცემული იქნება 5 ფოტო და შენ
                        რუკის საშუალებით უნდა უპასუხო თუ სად მდებარეობს კონკრეტული ადგილი. 
                        რაც უფრო ახლოს დასვავ წერტილს ქულაც მეტი გერგება.წარმატებები 😇</h3>
                    <SubmitButton type={'bg-danger'} handler={startGame} text={'დაწყება'} FSize={20} />
                </Stack>
            </div>
            <div className="cover">
                <img
                    src={gifs[Math.floor(Math.random() * gifs.length)]} />
            </div>
        </>
    )
}

export default Opening