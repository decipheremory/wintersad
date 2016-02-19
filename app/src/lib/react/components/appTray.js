// appTray.js

import React from 'react';

import IconButton from 'material-ui/lib/icon-button';
import Popover from 'material-ui/lib/popover/popover';
import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';
import AppIcon from '../components/appIcon';
import Dispatcher from '../api/dispatcher';
import HeaderMgr from '../mgrs/headerMgr';



class AppTray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: [],
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom'
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top'
      }
    };
    this._handleAppTrayOpen = this._handleAppTrayOpen.bind(this);
    this._handleAppTrayClose = this._handleAppTrayClose.bind(this);
    this._renderApps = this._renderApps.bind(this);
    this._onAppsUpdate = this._onAppsUpdate.bind(this);
    Dispatcher.subscribe('appsUpdated', this._onAppsUpdate.bind(this));
  }

  componentWillMount() {
    HeaderMgr.fetchApps();
  }

  _onAppsUpdate(eventObj) {
    this.setState({
      apps: eventObj.data
    });
  }

  _handleAppTrayOpen(event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  _handleAppTrayClose() {
    this.setState({
      open: false
    });
  }

  _renderApps(apps) {
    return apps.map(function(app, index) {
      return (
        <AppIcon key={index} appItem={{        
          title: app.title,
          url: app.url,
          icon: app.icon
        }} />
      );
    });
  }

  render() {

    const styles = {
      logo: {
        marginTop: -5,
        marginLeft: -5,
        width: 36,
        height: 36
      },
      popover: {
        padding: 10
      }
    };

    return (
      <div>
        <IconButton
          tooltip="App Tray"
          iconStyle={styles.logo}
          onTouchTap={this._handleAppTrayOpen}
        >
          <img src={'./lib/img/ChimeraLogo_v3_white_200x200.png'} />
        </IconButton>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this._handleAppTrayClose}
          animation={PopoverAnimationFromTop}
        >
          <div style={styles.popover}>
            {this._renderApps(this.state.apps)}
          </div>
        </Popover>
      </div>
    );
  }
}

AppTray.propTypes = {

};

AppTray.defaultProps = {
};

export default AppTray;
