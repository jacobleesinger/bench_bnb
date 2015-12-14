var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench_store');
var ApiUtil = require('../util/api_util');

var Map = React.createClass({

  getInitialState: function() {
    return (
      { benches: BenchStore.all()}
    );
  },


  createMarkers: function(benches) {

    var map = ReactDOM.findDOMNode(this.refs.map);

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    for (var i = 0; i < benches.length; i ++) {

      var marker = new google.maps.Marker({
        position: {lat: benches[i].lat, lng: benches[i].lng},
        map: this.map,
      });
    }
  },

  componentDidMount: function(){
      var map = ReactDOM.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);

      this.map.addListener('idle', function() {
        ApiUtil.fetchBenches();
      });

      BenchStore.addListener(this._onChange);

    },

    _onChange: function() {
      this.setState({
        benches: BenchStore.all()
      });

      this.createMarkers(this.state.benches);
    },

  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
