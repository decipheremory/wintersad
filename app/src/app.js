import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'lib/react/components/header';
import appConfig from 'appConfig';

import acmMocks from './lib/mocks/acmMocks';
import userMock from './lib/mocks/userMock';

const App = React.createClass({
  render() {
    return (
      <div>
        <Header
          user={userMock.user}
          messages={userMock.messages}
          profileUrl={appConfig.userProfileEndpoint}
          appId={appConfig.appId}
        />
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('app'));
