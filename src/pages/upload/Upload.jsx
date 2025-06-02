import React, { useState } from "react";
import Grid from '@mui/material/Grid';

import UploadInput from "./UploadInput";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

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

    if (!isLoaded) return <h1>loading</h1>;

    return (
        <Grid container style={{ height: "100vh",width:"100%"}}>
            <Grid item size={3} style={{ background: "white" }}>
                <UploadInput
                    formData={formData}
                    setFormData={setFormData}
                    marker={marker}
                />
            </Grid>
            <Grid item size={9} style={{ height: "100%"}}>
                    <GoogleMap
                        center={marker || { lat: 42, lng: 43 }}
                        onClick={handleMapClick}
                        mapContainerStyle={{
                            width: "100%",
                            height: "100%",
                        }}
                        zoom={7}
                    >
                        {marker && <Marker position={marker} />}
                    </GoogleMap>
            </Grid>
        </Grid>
    );
}

export default Upload;
