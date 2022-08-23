import React from 'react';
import { GoogleMap, LoadScript, MarkerF, Polygon } from '@react-google-maps/api';

const Map = () => {
    const containerStyle = {
        width: '80vw',
        height: '50vh',
        margin: 'auto'
    }; //map container view
    //latitude and longitude value from start to end point
    const startLat = 23.760553125947684;
    const endLat = 23.813676977644572;
    const startLng = 90.38927467742258;
    const endLng = 90.42413504023418;

    const center = {
        lat: 23.785, lng: 90.40
    }

    const positions = [
        { lat: startLat, lng: startLng },
        { lat: endLat, lng: endLng }
    ];
    //for mark the point
    const onLoad = marker => {
        console.log('marker: ', marker)
    }
    //for line between points
    const onLoad1 = polygon => {
        console.log("polygon: ", polygon);
    }
    const options = {
        fillColor: "lightblue",
        fillOpacity: 1,
        strokeColor: "red",
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    }
    //haversine formula for distance between two points
    const R = 6371e3;
    const x = startLat * Math.PI / 180;
    const y = endLat * Math.PI / 180;
    const i = (endLat - startLat) * Math.PI / 180;
    const z = (endLng - startLng) * Math.PI / 180;

    const a = Math.sin(i / 2) * Math.sin(i / 2) +
        Math.cos(x) * Math.cos(y) *
        Math.sin(z / 2) * Math.sin(z / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = (R * c) / 1000;
    const distanceKilo = d.toFixed(2);
    //post data to server database
    (async () => {
        const rawResponse = await fetch('https://care-box-backend.herokuapp.com/api/v1/applicant_test/post_distance/', {
            method: 'POST',
            headers: {
                'APIToken': 'yasinbillah46@gmail.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Distance: 6.89 })
        });
        const content = await rawResponse.json();
        console.log(content);
    })();

    return (
        <div className="my-3 bg-light p-3 rounded" >
            <h2 className='text-center'> Distance between two points: {distanceKilo} Kilometers </h2>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                >
                    {
                        positions.map(position =>
                            <MarkerF
                                onLoad={onLoad}
                                position={position}
                            />
                        )
                    }

                    <Polygon
                        onLoad={onLoad1}
                        paths={positions}
                        options={options}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;