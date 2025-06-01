import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import UploadInput from "./UploadInput";
import { GoogleMap, useLoadScript, Marker, Polyline } from '@react-google-maps/api';

function Upload() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_MAP_API
    });
    const [formData, setFormData] = useState({});
    const [marker, setMarker] = useState(null);

    const handleMapClick = (event) => {
        setMarker({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });
    };


    if (!isLoaded) return <h1>loading</h1>
    return (
        <>
            <Grid container style={{ height: "100vh" }}>
                <Grid item xs={3}>
                    <UploadInput
                        formData={formData}
                        setFormData={setFormData}
                        marker={marker}
                    />
                </Grid>
                <Grid item xs={9} style={{ height: "100%" }}>
                    <GoogleMap
                        center={marker || { lat: 24, lng: 24 }}
                        onClick={handleMapClick}
                        mapContainerStyle={{
                            width: "1350px",
                            height: "100%",
                        }}
                        zoom={7}
                    >
                        {marker && <Marker position={marker} />}

                    </GoogleMap>
                </Grid>
            </Grid>

        </>
    );
}

export default Upload;
