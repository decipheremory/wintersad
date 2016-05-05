// headerMgr.js

import dispatcher from '../api/dispatcher';
import { getApps, getApp} from '../api/apps';
import {getBsxSources} from '../api/bsxSources';
import _ from 'lodash';

var headerMgr = {

  fetchApps: function () {
    if(!sessionStorage.getItem('availApps')) {
    getApps()
      .then(function(results) {
        sessionStorage.setItem('availApps', JSON.stringify(results.apps));
        dispatcher.publish('appsUpdated', results.apps);
      })
      .catch(error => {
        let errMsg = '';
        if(error.json) {
          error.json.errors.map(err => { errMsg += ` ${err.message}`; });
        }
      });
    } else {
      // fetching from sessionStorage
      let apps = JSON.parse(sessionStorage.getItem('availApps'));
      dispatcher.publish('appsUpdated', apps);
    }
  },

  // fetchApp: function(appId) {
  //   getApp(appId)
  //     .then(function(results) {
  //       // setting the appData to sessionStorage.
  //       sessionStorage.setItem(appId, JSON.stringify(_.first(results.apps)));
  //     })
  //     .catch(error => {
  //       let errMsg = '';
  //       if(error.json) {
  //         error.json.errors.map(err => { errMsg += ` ${err.message}`; });
  //       }
  //     });
  // },

  fetchBsxSources: function() {
    getBsxSources()
      .then(function(results) {
        dispatcher.publish('searchSourcesUpdated', results);
      })
      .catch(error => {
        dispatcher.publish('searchSourcesNotAvailable', '');      
        let errMsg = '';
        if(error.json) {

          error.json.errors.map(err => { errMsg += ` ${err.message}`; });
        }
      });
  }
};

export default headerMgr;
