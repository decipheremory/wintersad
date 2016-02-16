// header.js

import React from 'react';
// import { Link } from 'react-router';

import { AppBar } from 'material-ui';

import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';


import AppTray from '../components/AppTray';
import ContextSearch from '../components/ContextSearch';
import UserExport from '../components/UserExport';
import UserProfile from '../components/UserProfile';
import UserNotification from '../components/UserNotification';



class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { user, exports, notifications, defaultContext, searchDisabled, toolbarDisabled } = this.props;

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
        height: 'inherit',
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
            <label style={styles.userDisplay}>{user.displayName}</label>
            <UserProfile user={user} />
            <UserExport exports={exports} />
            <UserNotification notifications={notifications} />
          </div>
        }
      >
      {!searchDisabled &&
        <div style={styles.search}>
          <ContextSearch
            defaultSource={defaultContext}
          />
        </div>
      }
      </AppBar>
      {!toolbarDisabled &&
        <Toolbar style={styles.toolbar}>
          <ToolbarTitle style={styles.toolbarTitle} text={defaultContext.toUpperCase()} />
        </Toolbar>
      }
      </div>
    );
  }
}

Header.propTypes = {
  user: React.PropTypes.object,
  notifications: React.PropTypes.array,
  exports: React.PropTypes.array,
  defaultContext: React.PropTypes.string.isRequired,
  searchDisabled: React.PropTypes.boolean,
  toolbarDisabled: React.PropTypes.boolean
};

Header.defaultProps = {
  user: {},
  notifications: [],
  exports: [],
  searchDisabled: false,
  toolbarDisabled: false
};

export default Header;
