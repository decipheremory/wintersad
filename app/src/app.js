import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'lib/react/components/header';
import appConfig from './appConfig';

import acmMocks from './lib/mocks/acmMocks';
import userMock from './lib/mocks/userMock';
// let userMock = undefined;

const App = React.createClass({
  render() {
    return (
      <div>
        {userMock &&
        <Header
          user={userMock.user}
          messages={userMock.messages}
          profileUrl={appConfig.userProfileEndpoint}
          appId={appConfig.appId}
          rollupAcm={acmMocks.unclassified}
        />
        }
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
