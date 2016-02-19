import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'lib/react/components/header';
import appConfig from 'appConfig';

const App = React.createClass({
  render() {
    const mockUser = {
      messages: [],
      user: {
        displayName: 'Testorius Ten'
      }
    };

    return (
      <div>
        <Header
          user={mockUser.user}
          profileUrl={appConfig.userProfileEndpoint}
          appId={appConfig.appId}
        />
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('app'));
