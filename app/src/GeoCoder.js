import React, { Component } from 'react'
import './GeoCoder.css'
import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCkMvvTFeM7uqK9CcqeavnXnLky7NYym3o&callback=initMap'

class GeoCoder extends Component {

  render() {

    initMap = () => {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: -34.397, lng: 150.644}
      })
      var geocoder = new google.maps.Geocoder()
    
      document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map)
      })
    }

    geocodeAddress = (geocoder, resultsMap) => {
      var address = document.getElementById('address').value
      geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
          resultsMap.setCenter(results[0].geometry.location)
          var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          })
        } else {
          alert('Geocode was not successful for the following reason: ' + status)
        }
      })
    }

    return (
      <div>
        <div id="floating-panel">
          <input id="address" type="textbox" value="Sydney, NSW" />
          <input id="submit" type="button" value="Geocode" />
        </div>
        <div id="map"></div>
      </div>
    )
  }
}

export default GeoCoder