import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

/* MapsResults requires at least one Prop to work properly.
 *  REQUIRED:
 *    // pos is ab object for the centre of the map. 
 *    // Get this from the MapsUtils geoencode
 *    pos = { lat: 35.123, lng: -128.123 }
 *
 *  OPTIONAL:
 *    // markers is an array of lat/lng objects.
 *    markers = [{ lat: 35.123, lng: -128.123 }, { lat: 35.123, lng: -128.123 }]
 * 
 *  EXAMPLE:
 *    render() {
 *      const centre = { lat: 35.123, lng: -128.123 }
 *      const supplier_locs = [
 *        { lat: 35.123, lng: -128.123 }, 
 *        { lat: 35.123, lng: -128.123 }
 *      ]
 * 
 *      return (
 *        <MapResults pos={ centre } markers={ supplier_locs } />
 *      )
 *    }
*/
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
        onCenterChanged={ () => console.log('center changed') }
      />
    )
  }
}

function makeMarker(coords,i) {
  return (
    <Marker key={i} position={coords}/>
  )
}

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    center={props.pos}
  >

    {props.markers.map((ll,i) => makeMarker(ll,i))}
  </GoogleMap>
));

export default MapResults