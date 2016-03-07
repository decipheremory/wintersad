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

  _renderApps(apps, appType) {
    return apps.map(function(app, index) {
      if(app.apptype === appType) {
        return (
          <AppIcon key={index} appItem={{
            title: app.title,
            url: app.url,
            icon: app.icon
          }} />
        );
      }
      return null;
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
      label: {
        padding: 5
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
          <div className="apps">
            {this.state.apps.length <= 0 &&
              <i style={styles.label} className="fa fa-info-circle fa-1x">You currently do not have access to any apps.</i>
            }
            <ul className="internal-set">
              {this._renderApps(this.state.apps, 'internal')}
            </ul>
            {this.state.apps.length > 0 && <hr />}
            <ul className="external-set">
              {this._renderApps(this.state.apps, 'external')}
            </ul>
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
