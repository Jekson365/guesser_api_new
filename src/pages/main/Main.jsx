import React, { createContext, useContext, useEffect, useState } from 'react'
import '../../styles/main/main.scss'
import { GoogleMap, useLoadScript, Marker, Polyline } from '@react-google-maps/api';
import SubmitButton from '../../commons/SubmitButton';
import Stat from '../../commons/Stat';
import UseLoadImages from '../../hooks/main/UseLoadImages';
import UseNextImage from '../../hooks/main/UseNextImage';
import UseSubmitAnswer from '../../hooks/main/UseSubmitAnswer';
import CurrentImage from './CurrentImage';
import Controls from './components/Controls';
import DistanceCounter from './components/DistanceCounter';
import { useRef } from 'react';
import ScoreDisplayer from './components/ScoreDisplayer';
import FinalScore from './components/FinalScore';
import Result from './components/Result';
import ChooseIcon from './components/ChooseIcon';
import CurrentUser from './components/CurrentUser';
import UseCurrentUser from '../../hooks/users/UseCurrentUser';
import useCurrentUser from '../../hooks/users/UseCurrentUser';
import { CurrentUserContext } from '../../App';

export const ScoreContext = createContext();

function Main() {
    const { currentUser } = useContext(CurrentUserContext)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_MAP_API
    });

    const [configed, setConfiged] = useState(false)
    const [gameover, setGameOver] = useState(false)
    const [resultArray, setResultArray] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [currentScore, setCurrentScore] = useState(0)
    const [score, setScore] = useState(0);
    const [currentImageToGuess, setCurrentImage] = useState(null);
    const [submited, setSubmited] = useState(false);
    const [marker, setMarker] = useState(null);
    const [center, setCenter] = useState({ lat: 41, lng: 43 });
    const [zoom, setZoom] = useState(7);

    const mapRef = useRef(null);

    const { loading, loadNextImage } = UseNextImage();
    const { handleSubmitAnswer, data } = UseSubmitAnswer();

    const handleSubmit = async () => {
        if (!gameover) {
            const submit = {
                lat: currentImageToGuess.lat,
                lng: currentImageToGuess.long,
                answeredLat: marker.lat,
                answeredLng: marker.lng
            };
            const rslt = {
                lines: [
                    {
                        lat: submit.lat,
                        lng: submit.lng,
                    },
                    {
                        lat: submit.answeredLat,
                        lng: submit.answeredLng
                    }
                ], path: currentImageToGuess?.path
            }
            setResultArray([...resultArray, rslt])
            setSubmited(true);

            const dd = await handleSubmitAnswer(submit);

            if (mapRef.current) {
                mapRef.current.setZoom(8);
            }
            setScore(score + (1000 - Math.round(dd?.distance)));
            setCurrentScore(1000 - Math.round(dd?.distance))


            setTimeout(() => {
                const next = async () => {
                    setSubmited(false);
                    const nextImg = await loadNextImage();

                    setCurrentImage(nextImg);
                };
                next();
            }, 3000);
        }
    };

    const handleMapClick = (event) => {
        setMarker({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        });
    };

    const { loadImages } = UseLoadImages();

    const playAgain = () => {
        window.location.reload()
    }
    const handleShowResult = () => {
        setShowResult(true)
    }
    useEffect(() => {
        const init = async () => {
            await loadImages();
            const nextImg = await loadNextImage();
            setCurrentImage(nextImg);
        };
        init();
    }, []);

    useEffect(() => {
        if (data?.questionsRemaining <= 0) {
            setGameOver(true)
        }
    }, [data])


    if (!isLoaded) return <div>loading...</div>;
    return (
        <>

            <CurrentUser />
            <ScoreContext.Provider value={{ score, setScore }}>
                {!configed && !currentUser && (<>
                    <ChooseIcon configed={configed} setConfiged={setConfiged} />
                </>)}
                {data?.questionsRemaining <= 0 && gameover && !showResult && (<>
                    <FinalScore score={score} playAgain={playAgain} showResult={handleShowResult} />
                </>)}
                {submited && data?.distance !== undefined && data?.questionsRemaining >= 1 && (
                    <ScoreDisplayer score={currentScore} />
                )}
                <DistanceCounter distance={data?.distance} />
                {!gameover && (<>
                    <CurrentImage currentImageToGuess={currentImageToGuess} />
                </>)}
                <GoogleMap
                    mapContainerStyle={{
                        width: "100%",
                        height: "100vh"
                    }}
                    zoom={zoom}
                    center={center}
                    mapTypeId='hybrid'
                    onClick={handleMapClick}
                    onLoad={map => {
                        mapRef.current = map;
                    }}
                >
                    {showResult && <Result result={resultArray} />}
                    {submited && marker && <Marker position={{
                        lat: currentImageToGuess?.lat,
                        lng: currentImageToGuess?.long
                    }} />}
                    {marker && <Marker position={marker} />}
                    {submited && marker && <Polyline
                        path={[
                            {
                                lat: currentImageToGuess?.lat,
                                lng: currentImageToGuess?.long
                            },
                            marker
                        ]}
                        options={{
                            strokeColor: "red",
                            strokeOpacity: 1,
                            strokeWeight: 4,
                        }}
                    />}
                </GoogleMap>
                <Controls gameover={gameover} showResult={showResult} handleSubmit={handleSubmit} data={data} />
            </ScoreContext.Provider>
        </>
    );
}

export default Main;