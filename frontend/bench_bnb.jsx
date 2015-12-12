var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./util/api_util');
var BenchStore = require('./stores/bench_store')
var Index = require('./components/index');

document.addEventListener("DOMCOntentLoaded", function() {
  ReactDOM.render(
    <Search />,
    document.getElementById('content')

  );
});
