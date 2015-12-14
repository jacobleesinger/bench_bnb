var React = require('react');
var BenchStore = require('../stores/bench_store');

var Map = React.createClass({

  initMap: function () {
    // debugger;
    var myLatLng = {lat: 37.7758, lng: -122.435};

    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);



    var marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Hello World!'
    });
  },

  componentDidMount: function(){
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);

      BenchStore.addListener(this._onChange);
      // debugger;
    },

    _onChange: function() {
      // debugger;
      this.initMap();
    },

  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
