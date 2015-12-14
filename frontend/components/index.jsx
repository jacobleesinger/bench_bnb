var React = require('react');
var BenchStore = require('../stores/bench_store');
var ApiUtil = require('../util/api_util');

var Index = React.createClass({

  getInitialState: function() {
    return (
      { benches: BenchStore.all() }
    );
  },

  componentDidMount: function() {
    this.benchToken = BenchStore.addListener(this._onChange);

  },

  _onChange: function() {
    this.setState({
      benches: BenchStore.all()
    });
  },

  render: function () {
    return (
      <div>
        {this.state.benches.map(function(bench) {

          return (
            <div key={bench.id}> {bench.description} </div>
            )
          })
        }
      </div>
    );

  }


});

module.exports = Index;
