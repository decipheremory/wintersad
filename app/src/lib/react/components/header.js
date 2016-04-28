// header.js

import React from 'react';

import {
  AppBar,
  Toolbar,
  ToolbarTitle
 } from 'material-ui';

import AppTray from '../components/appTray';
import ContextSearch from '../components/contextSearch';
import UserExport from '../components/userExport';
import UserProfile from '../components/userProfile';
import UserNotification from '../components/userNotification';
import RollupBanner from '../components/rollupBanner';
import HeaderMgr from '../mgrs/headerMgr';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Header extends React.Component {

  constructor(props) {
    super(props);
    this._getUserDisplayName = this._getUserDisplayName.bind(this);
  }

  componentWillMount() {
    const { appId } = this.props;
    HeaderMgr.fetchApp(appId);
  }

  componentDidMount() {
    document.getElementById('header-app-tray').parentElement.style.float = 'left';
  }

  _getUserDisplayName() {
    const { user } = this.props;
    let middleInitial = user.middleInitial ? user.middleInitial : '';
    if(user) {
      let displayName = '';
      if(user.firstName) {
        displayName += user.firstName;
      }
      displayName += ' ' + middleInitial;
      if(user.lastName) {
        displayName += ' ' + user.lastName;
      }
      return displayName;
    } else {
      return '';
    }
  }

  render() {
    const { messages, user, exports, appId, profileUrl, searchDisabled, toolbarDisabled, rollupAcm } = this.props;

    const styles = {
      header: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 100,
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
        display: 'inline-block',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 100
      },
      toolbarTitle: {
        fontSize: 16,
        height: 'inherit'
      }
    };

    return (
      <div>
        <div>
          <RollupBanner acm={rollupAcm} />
        </div>
        <AppBar
          style={styles.header}
          title="Chimera"
          titleStyle={styles.title}
          iconElementLeft={
            <span id='header-app-tray'>
              <AppTray appId={appId} />
            </span>
          }
          iconStyleRight={{
            float: 'right'
          }}
          iconElementRight={
            <span>
              {user &&
                <span style={styles.userDisplay}>{this._getUserDisplayName()}</span>
              }
              {user.exports &&
                <UserExport exports={exports} />
              }
              <UserProfile profileUrl={profileUrl} />
              <UserNotification user={user} messages={messages}/>
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
  user: React.PropTypes.object,
  messages: React.PropTypes.array,
  profileUrl: React.PropTypes.string,
  rollupAcm: React.PropTypes.object
};

Header.defaultProps = {
  user: {},
  messages: [],
  exports: [],
  profileUrl: '',
  searchDisabled: false,
  toolbarDisabled: false,
  rollupAcm: {}
};

export default Header;
