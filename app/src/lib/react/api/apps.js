// apps.js

import {checkStatus, fetchTimeout} from './httpHelpers';
import config from '../../headerConfig';
import 'whatwg-fetch';

/**
 * Async call to retrieve available apps (used to populate the appTray).
 * @return {Promise}
 */
var getApps = function() {

  let url = `${config.appServiceEndpoint}/apps`;


  // Use the new 'fetch()' function instead of the old XHR method. It's important
  // to set the credentials mode to 'include' to ensure that Firefox will use a
  // client certificate (if appropriate) when making secure, cross-origin requests.
  // Without this, Firefox confusingly reports CORS errors.
  //
  // Also note that with the chained calls on returned Promise objects we are
  // deliberately NOT calling .catch()--this would prevent the getApps() caller
  // from being able to catch() errors.
  let promise = fetchTimeout(`${config.requestTimeout}`, fetch(url, { credentials: 'include' }))

  // When promise returned by fetchTimeout() is resolved (i.e., request
  // finishes) the response will be passed to checkStatus().
  .then(checkStatus)

  // Response returned by checkStatus() wil be passed to this arrow function.
  .then(response => {
    return Promise.resolve(response.json());
  });
  // response.json() returns a promise that will resolve once the JSON is parsed
  // (see https://developer.mozilla.org/en-US/docs/Web/API/Body/json). This json
  // will then be passed to the following arrow function.
  // .then(json => {
  //   console.log("?");
  //   return Promise.resolve(results);
  // });

  return promise;
};

var getApp = function(appId) {
  let url = `${config.appServiceEndpoint}/apps/id/${appId}`;


  // Use the new 'fetch()' function instead of the old XHR method. It's important
  // to set the credentials mode to 'include' to ensure that Firefox will use a
  // client certificate (if appropriate) when making secure, cross-origin requests.
  // Without this, Firefox confusingly reports CORS errors.
  //
  // Also note that with the chained calls on returned Promise objects we are
  // deliberately NOT calling .catch()--this would prevent the getApps() caller
  // from being able to catch() errors.
  let promise = fetchTimeout(`${config.requestTimeout}`, fetch(url, { credentials: 'include' }))

  // When promise returned by fetchTimeout() is resolved (i.e., request
  // finishes) the response will be passed to checkStatus().
  .then(checkStatus)

  // Response returned by checkStatus() wil be passed to this arrow function.
  .then(response => {
    return Promise.resolve(response.json());
  });
  // response.json() returns a promise that will resolve once the JSON is parsed
  // (see https://developer.mozilla.org/en-US/docs/Web/API/Body/json). This json
  // will then be passed to the following arrow function.
  // .then(json => {
  //   console.log("?");
  //   return Promise.resolve(results);
  // });

  return promise;
};

export {getApps, getApp};
