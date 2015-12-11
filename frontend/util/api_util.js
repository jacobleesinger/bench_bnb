var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: 'api/benches',
      method: 'get',
      success: function(benches) {
        ApiActions.receiveAll(benches);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
