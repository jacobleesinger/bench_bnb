var React = require('react');

var Map = React.createClass({

  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
