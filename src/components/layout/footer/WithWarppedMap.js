import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

export default class FooterMap extends Component {
  render() {
    return (
      <div>
        <GoogleMap
          defaultZoom={13}
          defaultCenter={{ lat: 36.19902, lng: 36.164021 }}
        />
      </div>
    );
  }
}

export const WithWarppedMap = withScriptjs(withGoogleMap(FooterMap));
