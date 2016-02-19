// header.js

import React from 'react';

import { AppBar } from 'material-ui';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';


import AppTray from '../components/AppTray';
import ContextSearch from '../components/ContextSearch';
import UserExport from '../components/UserExport';
import UserProfile from '../components/UserProfile';
import UserNotification from '../components/UserNotification';
import { HeaderWrapper } from '../components/headerWrapper';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { user, exports, appId, profileUrl, searchDisabled, toolbarDisabled } = this.props;
    const styles = {
      header: {
        backgroundColor: '#444',
        height: 55
      },
      userDisplay: {
        color: '#FFF'
      },
      search: {
        margin: 'auto',
        position: 'absolute',
        left: '20%',
        top: 10
      },
      toolbar: {

      },
      toolbarTitle: {
        fontSize: 16,
        height: 'inherit'
      }
    };

    return (
      <div>
      <AppBar
        style={styles.header}
        title="Chimera"
        iconElementLeft={
          <div>
            <AppTray />
          </div>
        }
        iconElementRight={

          <div>
            {this.props.hasUserData() &&
              <label style={styles.userDisplay}>{this.props.getUserDisplayName()}</label>
            }
            <UserProfile profileUrl={profileUrl} />
            {this.props.hasUserData() &&
              <UserExport exports={exports} />
            }
            {this.props.hasUserData() &&
              <UserNotification user={user} />
            }
          </div>
        }
      >
      {!searchDisabled &&
        <div style={styles.search}>
          <ContextSearch defaultSource={appId} />
        </div>
      }
      </AppBar>
      {!toolbarDisabled &&
        <Toolbar style={styles.toolbar}>
          <ToolbarTitle style={styles.toolbarTitle} text={document.title.toUpperCase()} />
        </Toolbar>
      }
      </div>
    );
  }
}

Header.propTypes = {
  exports: React.PropTypes.array,
  appId: React.PropTypes.string,
  searchDisabled: React.PropTypes.bool,
  toolbarDisabled: React.PropTypes.bool,
  getUserDisplayName: React.PropTypes.func,
  hasMessages: React.PropTypes.func,
  hasUserData: React.PropTypes.func,
  user: React.PropTypes.object,
  profileUrl: React.PropTypes.string
};

Header.defaultProps = {
  user: {},
  exports: [],
  profileUrl: '',
  searchDisabled: false,
  toolbarDisabled: false
};

export default HeaderWrapper(Header);
