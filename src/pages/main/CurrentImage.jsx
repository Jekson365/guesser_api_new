import React, { useEffect, useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import UseCurrentUser from '../../hooks/users/UseCurrentUser';

function CurrentImage({ currentImageToGuess }) {
    const [isFullScreen, setFullScreen] = useState(false)
    console.log(currentImageToGuess)
    const handleFullScreen = () => {
        setFullScreen(!isFullScreen)
    }
    return (
        <>
            {isFullScreen ? (<>
                <div className="full-screen">
                    <img src={import.meta.env.VITE_SERVER_IMAGES + currentImageToGuess?.path} />
                </div>
                <div className="backdrop"
                    onClick={handleFullScreen}
                ></div>
            </>) : null}
            {currentImageToGuess?.sender?.instagramUrl && (<>
                <div className="socials">
                    <div className="content">
                        <div className="url">
                            {currentImageToGuess?.sender?.instagramUrl}
                        </div>
                        <div className="icon">
                            <InstagramIcon
                                style={{
                                    color: "white",
                                    fontSize: "13px"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </>)}
            <div
                style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "30px",
                    width: "300px",
                    height: "200px",
                    zIndex: "7",
                }}
                onClick={handleFullScreen}
                className='current-image'
            >
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                    src={import.meta.env.VITE_SERVER_IMAGES + currentImageToGuess?.path} />
            </div>
        </>
    )
}

export default CurrentImage