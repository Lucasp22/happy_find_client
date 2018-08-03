import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

function makeMarker(coords) {
  return (
    <Marker position={coords} />
  )
}

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.pos}
  >

    {props.markers.map( (ll) => makeMarker(ll) )}
  </GoogleMap>
));

class MapResults extends Component {
  render() {
    return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDiQ5gOiu9480aI_pxyj7EJhJl-F3LVspM"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        pos={ this.props.pos || {} }
        markers={ this.props.markers || [] }
      />
    )
  }
}

export default MapResults