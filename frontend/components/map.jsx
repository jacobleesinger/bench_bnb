var React = require('react');

var Map = React.createClass({

  componentDidMount: function(){
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      BenchStore.addListener(this._onChange);
    },

  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
