import React, { Component } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel"
import { Link } from 'react-router-dom';



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
        zoom={ this.props.zoom || 4 }
        onChange={ (map) => { this.props.onChange(map.getCenter(), map.getZoom())} }
      />
    )
  }
}

function makeMarker(m,i) {
  return (
      <MarkerWithLabel 
        key={i} 
        position={{ lat: m.latitude, lng: m.longitude }}
        labelAnchor={ {x:0, y:15} }
        labelclassName="map-marker-label"
        clickable={false}
        defaultClickable={false}
      >
        <Link className="map-marker-link" to={{
          pathname: '/booking/' + m.id ,
          state: {
            supplier: m
          }
        }} >
          {m.name}<i className="material-icons">touch_app</i>
        </Link>
      </MarkerWithLabel>
  )
}

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    ref={ref => this.map = ref}
    center={props.pos}
    zoom={props.zoom}
    onZoomChanged={ () => props.onChange(this.map) }
    onDragEnd={ () => props.onChange(this.map) }
  >

    {props.markers.map((s,i) => makeMarker(s,i))}
  </GoogleMap>
));

export default MapResults