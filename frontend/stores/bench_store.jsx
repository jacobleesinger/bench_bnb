var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = {};
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  var benches = [];
  for (var key in _benches) {
    if (_benches.hasOwnProperty(key)) {
      var value = _benches[key];
      benches.push(value);
    }
  }
return benches;
};

var resetBenches = function() {
  _benches = {};
};

var addAllBenches = function(benches) {
  
  benches.forEach(function(bench) {
    _benches[bench.id] = bench;
  });
};

BenchStore.__onDispatch = function(payload) {

  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches();
      addAllBenches(payload.benches);
      BenchStore.__emitChange();
      break;
  }
}

window.BenchStore = BenchStore;

module.exports = BenchStore
