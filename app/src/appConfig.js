// appConfig.js

// We have configured SystemJS to load and use a "loader plugin" for CSS files
// (see systemjs/plugin-css in system.config.js). SystemJS will use this plugin
// to load any resources ending in the .css extension (note that you can also
// use syntax like '.txt!text' to explicitly specify which plugin should load
// a resource). For more info see http://stackoverflow.com/a/31620209/62694.


import injectTapEventPlugin from 'react-tap-event-plugin';
import 'normalize.css';

export default {
  userServiceEndpoint: 'https://chm.363-283.io/service/userservice/1.0',
  userProfileEndpoint: 'https://chm.363-283.io/apps/userprofile/',
  appId: 'standalone-header',
  useLegacySearch: true,
  requestTimeout: 15000
};

injectTapEventPlugin();
