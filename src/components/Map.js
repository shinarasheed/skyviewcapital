import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GoLocation } from 'react-icons/go';

const LocationPin = ({ text }) => (
  <div className="pin">
    <GoLocation />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDu_ixjl4vFNBfOha6Se80IotQoJg-JD5g' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
