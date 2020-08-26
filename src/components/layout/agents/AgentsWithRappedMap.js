import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

const AgentsMap = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 34.802074, lng: 38.9968151 }}
      />
    </div>
  );
};

export const AgentsWithWarppedMap = withScriptjs(withGoogleMap(AgentsMap));
