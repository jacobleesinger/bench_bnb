var React = require('react');
var Map = require('./map');
var Index =require('./index');

var Search = React.createClass({

  render: function () {
    return (
      <div>
        search
        <Map />
        <Index />
      </div>
    );
  }
});

module.exports = Search;
