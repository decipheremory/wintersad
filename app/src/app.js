import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'lib/react/components/header';
import appConfig from 'appConfig';

const App = React.createClass({

  const mockUser = {
    
  }

  render() {
    return (
      <div>
        <Header
          user={user}
          profileUrl={appConfig.userProfileEndpoint}
          appId={appConfig.appId}
        />
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('app'));
