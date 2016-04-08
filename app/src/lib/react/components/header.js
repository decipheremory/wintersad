// header.js

import React from 'react';

import { AppBar } from 'material-ui';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';


import AppTray from '../components/appTray';
import ContextSearch from '../components/contextSearch';
import UserExport from '../components/userExport';
import UserProfile from '../components/userProfile';
import UserNotification from '../components/userNotification';
import { HeaderWrapper } from '../components/headerWrapper';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('header-app-tray').parentElement.style.float = 'left';
  }

  render() {
    const { user, exports, appId, profileUrl, searchDisabled, toolbarDisabled } = this.props;
    const styles = {
      header: {
        backgroundColor: '#444',
        height: 55
      },
      userDisplay: {
        paddingTop: 18,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        color: '#FFF',
        display: 'block',
        float: 'left'
      },
      search: {
        margin: 'auto',
        position: 'absolute',
        left: '33%',
        top: 10
      },
      title: {
        display: 'inline-block'
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
        titleStyle={styles.title}
        iconElementLeft={
          <span id='header-app-tray'>
            <AppTray />
          </span>
        }
        iconStyleRight={{
          float: 'right'
        }}
        iconElementRight={
          <span>
            {this.props.hasUserData() &&
              <label style={styles.userDisplay}>{this.props.getUserDisplayName()}</label>
            }
             <UserProfile profileUrl={profileUrl} />

            {this.props.hasExports() &&
              <UserExport exports={exports} />
            }
            {this.props.hasMessages() &&
              <UserNotification user={user} />
            }
          </span>
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
  hasExports: React.PropTypes.func,
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
