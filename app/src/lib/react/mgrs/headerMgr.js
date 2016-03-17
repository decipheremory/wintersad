// headerMgr.js

import dispatcher from '../api/dispatcher';
import {getApps} from '../api/apps';
import {getBsxSources} from '../api/bsxSources';

var headerMgr = {

  fetchApps: function () {
    getApps()
      .then(function(results) {
        dispatcher.publish('appsUpdated', results.apps);
      })
      .catch(error => {
        let errMsg = '';
        if(error.json) {
          error.json.errors.map(err => { errMsg += ` ${err.message}`; });
        }
      });
  },

  fetchBsxSources: function() {
    getBsxSources()
      .then(function(results) {
        dispatcher.publish('searchSourcesUpdated', results);
      })
      .catch(error => {
        let errMsg = '';
        if(error.json) {
          error.json.errors.map(err => { errMsg += ` ${err.message}`; });
        }
        invokeCallback(false, errMsg);
      });
  }
};

export default headerMgr;
