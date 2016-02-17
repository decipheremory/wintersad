import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'lib/react/components/header';
import appConfig from 'appConfig';

const App = React.createClass({

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
});


ReactDOM.render(<App />, document.getElementById('app'));
