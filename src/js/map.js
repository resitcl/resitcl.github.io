
/**
 * Created by luisurrutiaf on 5/1/17.
 */
/* global google */
import { GoogleMapsLoader } from 'google-maps';

export default class Map {

  constructor(id) {
    this.id = id;
  }

  init() {
    const mapCanvas = document.getElementById(this.id);
    const myLatlng = new google.maps.LatLng(-33.413720, -70.573649);

    const mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL },
    };

    GoogleMapsLoader.load((google) => {
      // eslint-disable-next-line no-new
      new google.maps.Map(mapCanvas, mapOptions);
    });
  }
}
