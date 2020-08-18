import React from 'react';
import { AgentsWithWarppedMap } from './AgentsWithRappedMap';
import { REACT_APP_GOOGLE_KEY } from '../../../config/apikey';

export const AgentMap = () => {
  return (
    <>
      <div className="agents-map">
        <AgentsWithWarppedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </>
  );
};
