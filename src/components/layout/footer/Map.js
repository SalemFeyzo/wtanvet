import React from 'react';
import { WithWarppedMap } from './WithWarppedMap';
import { REACT_APP_GOOGLE_KEY } from '../../../config/apikey';

const Map = () => {
  return (
    <>
      <div>
        <h5>موقع الشركة:</h5>
        <div className="footer-map" style={{ width: '300px', height: '300px' }}>
          <WithWarppedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </div>
    </>
  );
};
export default Map;
