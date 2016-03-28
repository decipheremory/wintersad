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


## Run the example app

If you want to take a look at what the header looks like from a standalone vanilla app. Pull down the code base. Install and run the server.

`npm install`
`gulp`

## Integration/Installation to Corius Based Apps.

Fastest way to install the module is to use jspm. From your [Corius](https://gitlab.363-283.io/cte/corius) generated app. Run

`jspm install npm:chimera-header-web-ui`

Chimera header module currently utilized a lot of the materialized icons. Thus please remember to reference the stylesheet within the index.html file. Corius based React/Material applciations should already have the lib installed. You'll just need to reference it. Current header relies on the fontAwesome lib to be installed to your app.

```html
<link rel="stylesheet" href="icons/materialDesign/material-icons.css">
<link rel="stylesheet" href="icons/fontAwesome/css/font-awesome.min.css">
```

The following will need to be done within Corius application. Need to create a **images.js** under the **gulpTasks** directory.

```js
'use strict';

var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

gulp.task('copyImagesFromJspmModules', function(done) {
  return gulp.src('src/jspm_packages/**/*.{png,jpeg}')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(path.join(global.paths.imgDist, 'jspm')));
});
```

This task copies the necessary image assets to the **dist/img/jspm** directory where references to the source could be relative within the application.

Add the task call to the **serve.js** file. Below is a snippet example of the integration/usage pattern.

```js
// Start local dev server.
gulp.task('serve', function(done) {
  var sequence = ['indexHtml', 'fonts', 'systemJsConfig', 'less', 'icons', 'templates', 'js', 'copyImagesFromJspmModules'];

  runSeq('clean', sequence, 'watch', function() {
    _browserSync = browserSync.create('Dev Server');

    // set serverOptions here due to dependency on global.baseUrl which is
    // set by the baseUrl task in the indexHtml task
    var serverOptions = {
      open: false,
      ui: false,
      notify: false,
      ghostMode: false,
      port: process.env.PORT || 9000,
      server: {
        baseDir: global.paths.dist,
        routes: {
          [global.baseUrl + 'system.config.js']: './src/system.config.js',
          [global.baseUrl + 'jspm_packages']: './src/jspm_packages'
        }
      },
      middleware: [
        historyApiFallback({
          historyApiFallback: true
        })
      ]
    };

    return _browserSync.init(serverOptions, done);
  });
});
```

Also add task call to the **build.js** file

```js
// One build task to rule them all.
gulp.task('build', function(done) {
  global.buildMode = true;

  var preBuild = ['buildPrep'];
  var build = ['buildImgs', 'indexHtml', 'buildJs', 'fonts', 'copyFontsFromJspmModules', 'copyImagesFromJspmModules'];
  var postBuild = ['combineCss'];

  build.push('icons');

  runSeq('clean', preBuild, build, 'rewriteBundledCssUrlsForJspmFonts', postBuild, done);
});
```

Add the following properties to your **appConfig.js** configuration file.

```js
export default {
  userProfileEndpoint: 'https://chm.363-283.io/apps/userprofile/',
  appId: 'standalone-header'
};
```

## Examples

### Integrating to React Based Applications
Below is an demonstration example of how you would integrate the header to your React based application.

```js
import appConfig from '../appConfig';
import Header from 'chimera-header-web-ui/lib/react/components/header';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Header
          user={this.props.user}
          profileUrl={appConfig.userProfileEndpoint}
          appId={appConfig.appId}
        />
      </div>
    );
  }
}
```

The Header module requires a few props. Below are brief explanation as to what they are and their usage.

* **user** User auth object.
* **profileUrl** User Profile URL Endpoint. Please set this within the appConfig.js file as a configurable prop.
* **appId** Application id. Please set this within the appConfig.js file as a configurable prop.
* **searchDisabled** [Optional] Default to false. Changing the boolean to {true} will hide the contextual search component within the header.
* **toolbarDisabled** [Optional] Default to false. Changing the boolean to {true} will hide the secondary toolbar below the header.

### Integrating to Angular Based Applications
Below is an demonstration example of how you would integrate the header to your Angular based application. Because the Header module is natively
React based, there are some additional steps needed in order to integrate to Angular applications. We will require primarily the ngReact dependency
lib as the primary core to help facilitate the React/Angular bridge crossover.

Thus, first install the ngReact lib.

`jspm install npm:ngreact@^0.2.0`

Once installed, look within the `src/system.config.js`. Make sure that ngReact dependency uses the **same** angular dependency version as what's installed.
Below is an example in comparison.

```js
map: {
  "angular": "github:angular/bower-angular@1.3.15",
  "ngreact": "npm:ngreact@0.2.0",
  ...
  "npm:ngreact@0.2.0": {
    "angular": "github:angular/bower-angular@1.3.15",
    "react": "npm:react@0.14.7",
    "react-dom": "npm:react-dom@0.14.1"
  }
  ...
}
```

Create new HeaderController in `src/js/headerCtrl.js`. Below is bare vanilla snippet example of the integration/usage pattern.

```js
// headerCtrl.js

import mainModule from '../mainModule';
import appConfig from '../appConfig';

// this is the actual React based module imported.
import Header from 'chimera-header-web-ui/lib/react/components/header';

mainModule.controller('HeaderController', ['Authentication', '$scope', function(Auth, $scope) {

  // set the header module propTypes
  $scope.header = {
    user: {},
    profileUrl: appConfig.userProfileEndpoint,
    appId: appConfig.appId
  };

  Auth.onCurrentUserChange(function(currentUser) {
    // populate the user when currentUser is available...
    if(currentUser) {
      $scope.header.user = currentUser.userData;
    }
  });
}]);
// load the actual React module
mainModule.value('Header', Header);
```

Within `src/js/app.js`, import the HeaderCtrl. The ordering is important. Below is the snippet example of the integration/usage pattern.
```js
// app.js

import 'es6-shim';

/**
  The order of modules is important.
  Modules that are dependencies of others should be placed higher up.
**/

import './services/application';
import './services/authentication';
import './controllers/navCtrl';
import './controllers/loginCtrl';
import './controllers/mainCtrl';
import './controllers/headerCtrl';
import './mainModule';
```

Create new header view template in `src/js/templates/header.tpl.html`. Below is the snippet example of the integration/usage pattern.

```html
<react-component name="Header" props="header" watch-depth="reference"/>
```

1. react-component is an Angular directive that delegates off to a React component.


Within `src/js/mainModule.js` import the **ngreact** module and inject the react as part of the dependency.

```js
import 'ngreact';

import headerTpl from './templates/header.tpl.html!text';

var mainModule = angular.module('Main', [
  'react',

  'ngCookies',
  'ngResource',

  'ngMaterial',
  'ui.router'
]);
```

Next, update the $stateProvider within `src/js/mainModule.js`. Below is the snippet example of the integration/usage pattern.

```js
$stateProvider
  .state('login', {
    url: '/login',
    // Note that we are excluding the 'nav' view. This will cause it
    // to be hidden while the user is being logged in.
    views: {
      'content': {
        template: loginTpl
      }
    }
  })
  .state('loginFailed', {
    url: '/loginFailed',
    views: {
      'content': {
        template: loginFailedTpl,
        controller: ['Authentication', '$scope', function(Authentication, $scope) {
          let errMsg = '';
          Authentication.getErrors().map(err => { errMsg += ` ${err.message}`; });
          $scope.errMsg = errMsg;
        }]
      }
    }
  })
  .state('home', {
    url: '/',
    views: {
      'nav': {
        template: headerTpl,
        controller: 'HeaderController'
      },
      'content': {
        template: mainTpl,
        controller: 'MainController'
      }
    }
  })
  .state('about', {
    url: '/about',
    views: {
      'header': {
        template: headerTpl,
        controller: 'HeaderController'
      },
      'content': {
        template: aboutTpl
      }
    }
  });
```

Next, add the following app container within `src/index.html`.

```html
<div id="app"></div>
```

## Contribute

The main goal of the header ui module is to help to ensure UI/UX consistency between all Chimera based applications. As the application evolve, so will the header module. If you're interested in helping to contribute to make the module better, it is greatly appreciated. Any feedback/issues you are having is appreciated as well.

### Compile Module

To compile the module before publishing to our private npm registry. Run

`gulp compileModule`

### Publish Module

Make sure you rev up the next up version from within the `package.json` file. Then run

`npm publish`

The above assumes you already have your **~/.npmrc** configured proper.
