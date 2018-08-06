const scriptjs = require(`scriptjs`);
const mapsURL = 'https://maps.googleapis.com/maps/api/js?key=';

/*  
*   USAGE:
*   Import these MapsUtils with:
*     1.    import MapsAPI from '../utils/MapsUtil'
*     2.    create a new instance of MapsAPI with:
*                 const API_KEY = "AIzaSyDiQ5gOiu9480aI_pxyj7EJhJl-F3LVspM";
*                 const maps = new MapsAPI(API_KEY);
*     3.    call functions with:   maps.fn(), eg:
*                 maps.geocode('sydney', () => { //foo })
*/

class MapsAPI {
  constructor(API_KEY) {
    this.ready = false;
    this.mapsURL = mapsURL + API_KEY
    this.loadMapsAPI();
  }

  loadMapsAPI() {
    scriptjs(this.mapsURL, () => {
      this.maps = window.google.maps
      this.geocoder = new this.maps.Geocoder();

      this.ready = true;
      console.log('ready');
    });
  }

  
  // asynchronous request - supply success at least function
  geocode(string, success, failure) {
    if (this.ready) {
      console.log("calling geocoder");
      this.geocoder.geocode({ 'address': string, region: 'AU' }, function (results, status) {
        if (status === 'OK') {
          if (success && success.call) success.call(this, results);
        } else {
          if (failure && failure.call) failure.call(this, status);
        }
      });
    } else {
      console.log("not ready, retrying");
      setTimeout(() => this.geocode(string, success, failure), 1000);
    }
  }

  getLatLng(results) {
    return {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng()
    }
  }
}






export default MapsAPI