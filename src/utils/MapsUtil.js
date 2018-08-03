/*  
*   Import these Utils with:
*   import { loadMapsAPI } from '../utils/MapsUtil'
*/


const scriptjs = require(`scriptjs`);
const mapsURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDiQ5gOiu9480aI_pxyj7EJhJl-F3LVspM';

export function loadMapsAPI(callback) {
  scriptjs(mapsURL, callback)
}