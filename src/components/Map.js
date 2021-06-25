import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GoLocation } from 'react-icons/go';
import styled from 'styled-components';

const LocationPin = ({ text }) => (
  <div className="pin">
    <GoLocation style={{ fontSize: '4rem' }} />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <MapContainer>
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_API_KEY }}
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
  </MapContainer>
);

const MapContainer = styled.div`
  .google-map {
    width: 100%;
    height: 100%;
  }

  .pin {
    display: flex;
    align-items: center;
  }

  .pin-text {
    font-size: 1.3em;
  }

  @media screen and (min-width: 799px) {
    .google-map {
      height: 80vh;
    }

    .pin {
      width: 15vw;
    }

    .pin-icon {
      font-size: 10vw;
    }
  }
`;

export default Map;
