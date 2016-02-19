// headerMgr.js

import dispatcher from '../api/dispatcher';
import {getApps} from '../api/apps';
import {getCtxSources} from '../api/bsxSources';

var headerMgr = {

  fetchApps: function () {

    // mocked stubbed data...
    const apps = [{
      title: 'HOME',
      url: '#',
      icon: 'home'
    }, {
      title: 'INQUIRE',
      url: '#',
      icon: 'zoom_in'
    }, {
      title: 'OGPTS',
      url: '#',
      icon: 'dashboard'
    }, {
      title: 'SEMANTICA',
      url: '#',
      icon: 'share'
    }, {
      title: 'UA',
      url: '#',
      icon: 'lock_open'
    }];

    dispatcher.publish('appsUpdated', apps);
    //TODO uncomment below block once backend services is ready
    // getApps()
    //   .then(function(results) {
    //     dispatcher.publish('appsUpdated', results.user);
    //   })
    //   .catch(error => {
    //     let errMsg = '';
    //     if(error.json) {
    //       error.json.errors.map(err => { errMsg += ` ${err.message}`; });
    //     }
    //     invokeCallback(false, errMsg);
    //   });
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
