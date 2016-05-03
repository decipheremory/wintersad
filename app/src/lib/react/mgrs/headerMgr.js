// headerMgr.js

import dispatcher from '../api/dispatcher';
import { getApps, getApp} from '../api/apps';
import {getBsxSources} from '../api/bsxSources';
import _ from 'lodash';

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

  fetchApp: function(appId) {
    getApp(appId)
      .then(function(results) {
        // setting the appData to sessionStorage.
        sessionStorage.setItem(appId, JSON.stringify(_.first(results.apps)));
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
      });
  }
};

export default headerMgr;
