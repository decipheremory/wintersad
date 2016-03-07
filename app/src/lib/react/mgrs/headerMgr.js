// headerMgr.js

import dispatcher from '../api/dispatcher';
import {getApps} from '../api/apps';
import {getCtxSources} from '../api/bsxSources';

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
        invokeCallback(false, errMsg);
      });
  },

  fetchBsxSources: function() {

    // mocked stubbed data...
    const sources = [{
      external: true,
      srcIcon: 'home',
      id: 'hyperdrive',
      label: 'Hyperdrive'
    },{
      external: false,
      srcIcon: 'dashboard',
      id: 'ogpts',
      label: 'OGPTS'
    }];

    dispatcher.publish('searchSourcesUpdated', sources);
    //TODO uncomment below block once backend services is ready
    // getBsxSources()
    //   .then(function(results) {
    //     dispatcher.publish('searchSourcesUpdated', results.user);
    //   })
    //   .catch(error => {
    //     let errMsg = '';
    //     if(error.json) {
    //       error.json.errors.map(err => { errMsg += ` ${err.message}`; });
    //     }
    //     invokeCallback(false, errMsg);
    //   });
  }
};

export default headerMgr;
