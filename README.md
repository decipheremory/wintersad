# Chimera Header Web UI

Chimera Header Web UI is a NPM module that providing a federated/standardized data driven header for the Chimera application suite. The module currently only supports React based applications. Future milestones may support other UI framework such as AngularJS. Currently the header UI/UX was designed with heavy influence upon adopting Google's Materialized Designs specs (https://www.google.com/design/spec/material-design/introduction.html). Components such as the App Tray and Contextual Search are driven by the data provided by the backend API. The data is governed by your user token (e.g. user_dn) and is restricted to what you are allowed access to.

The dynamic header module is composed of a list of components.

* **App Tray** Provides to user list of applications the user is allowed access to. Data is driven by the backend API.
* **Contextual Search** Context search based on where you are in the application suite. Users are also allowed to manually select the contextual sources to execute search query against. The context search sources are data driven by the backend API. Executing the search query shall redirect users to the Chimera Search app.
* **User Profile** Menu/Link to take users to the user profile app where user can update their profile.
* **Export** [FUTURE] This feature has not been implemented yet
* **Notification** Notification messages that's tied to user's account.

The module is currently published to a private NPM server at https://npm.363-283.io.

1. [Install](#install)
1. [Run the example app](#run-the-example-app)
1. [Usage](#usage)
1. [React](#react)

## Installation

To install the module just run:

`npm install`

## Run the example app

If you want to take a look at what the header looks like from a standalone vanilla app. Pull down the code base. Install and run the server.

`npm install`
`gulp`

## Examples

Below is an example of how you would integrate the header to your React based application.

```js
import Header from 'chimera-header-web-ui/lib/react/components/header';

class Main extends React.Component {

  render() {

    const user = {
      displayName: 'Joe Shacks',
      profileUrl: 'https://chm.363-283.io/apps/userprofile'
    };

    const messages = [{
      type: 'warning',
      message: '(U) User profile does not have a phone number'
    }, {
      type: 'error',
      message: '(U) User profile does not have an email address'
    }, {
      type: 'warning',
      message: '(U) Please review user profile and update if necessary.'
    }, {
      type: 'warning',
      message: '(U) User profile does not have a last name'
    }, {
      type: 'warning',
      message: '(U) User profile does not have a first name'
    }, {
      type: 'warning',
      message: '(U//FOUO) You currently have access to ORCON shared with DIA. You can update your Mission Needs profile in GIMMEE (https://gimmee.cia.ic.gov).'
    }];

    const defaultContext = 'hyperdrive';

    return (
      <div>
        <Header
          user={user}
          notifications={messages}
          defaultContext={defaultContext}
          searchDisabled={false}
          toolbarDisabled={false}
        />
      </div>
    );
  }
}
```

The Header module requires a few props. Below are brief explanation as to what they are and their usage.

* **user** User auth object.
* **notification** Notification messages associated to user's account.
* **defaultContext** Default location context. This generally set as a one time and is the name of the application.
* **searchDisabled** Default to false. Changing the boolean to {true} will hide the contextual search component within the header.
* **toolbarDisabled** Default to false. Changing the boolean to {true} will hide the secondary toolbar below the header.



### React

1. Add material-icons reference to the index.html file.

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
  <script>
    window.chmHeaderHarness = {
      BASE_URL: "{{baseUrl}}"
    };
  </script>
  <base href="{{baseUrl}}">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <meta name="apple-mobile-web-app-title" content="chmHeaderHarness">
  <title>chmHeaderHarness</title>
  <link rel="stylesheet" href="/css/app.css">
  <link rel="stylesheet" href="/icons/materialDesign/material-icons.css">
</head>

<body>
  <noscript>
    <div class="js-disabled-warning">
      <h1>JavaScript not detected.</h1>
      <p>This application requires JavaScript. Please enable it from your browser settings.
    </div>
  </noscript>

  <div id="app"></div>

  <script src="jspm_packages/system.js"></script>
  <script src="system.config.js"></script>

  <!-- PROD
  <script type="text/javascript">
    // Override SystemJS's default locate() function to include custom cache-
    // busting logic.
    var systemLocate = System.locate;
    System.locate = function(load) {
      var System = this;
      return Promise.resolve(systemLocate.call(this, load)).then(function(address) {
        if(address.indexOf('bust') > -1 ||
        address.indexOf('css') > -1 ||
        address.indexOf('json') > -1) return address;
        return address + System.cacheBust;
      });
    }
    System.cacheBust = '?bust={{hash}}';
  </script>
  END -->

  <script>System.import('/js/app')</script>
</body>
</html>
```
