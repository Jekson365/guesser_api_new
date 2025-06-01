import { InfoWindow, Marker, Polyline } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'

function Result({ result }) {
    const [activeMarker, setActiveMarker] = useState(null)

    return (
        <>
            {result && result.map((r, index) => {
                return (
                    <>
                        <Marker position={r.lines[0]}
                            onMouseOver={() => setActiveMarker(index)}
                            onMouseOut={() => setActiveMarker(null)}
                        >

                            <InfoWindow
                                position={r.lines[0]}
                                // onCloseClick={() => setActiveMarker(null)}
                            >
                                <div style={{ width: "200px", height: "150px", overflow: "hidden" }}>
                                    <img src={import.meta.env.VITE_SERVER_IMAGES + r.path}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                </div>
                            </InfoWindow>
                        </Marker>
                        <Marker position={r.lines[1]} />
                        <Polyline
                            path={r.lines}
                            options={{
                                strokeColor: "red",
                                strokeOpacity: 1,
                                strokeWeight: 2,
                            }}
                        />
                    </>
                )
            })}
        </>
    )
}

export default Result