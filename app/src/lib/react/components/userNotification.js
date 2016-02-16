// userNotification.js

import React from 'react';
import Badge from 'material-ui/lib/badge';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';

import Dispatcher from '../api/dispatcher.js';


class UserNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
    this._renderMessages = this._renderMessages.bind(this);
    this._onNotificationsChange = this._onNotificationsChange.bind(this);
    Dispatcher.subscribe('userNotifications', this._onNotificationsChange, this);
  }

  _onNotificationsChange(eventObj) {
    console.log(eventObj);
    this.setState({
      notifications: eventObject.data
    })
  }

  _renderMessages() {
    const { notifications } = this.props;
    return notifications.map(function(notification, index) {
      let iconType = notification.type === 'warning' ? 'warning' : 'error';
      return (
        <MenuItem
          key={index}
          primaryText={notification.message}
          leftIcon={<FontIcon className="material-icons">{iconType}</FontIcon>}
        />
      );
    });
  }

  render() {
    const { notifications } = this.props;
    const styles = {
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom'
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top'
      },
      icon: {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        marginRight: 10
      },
      badgeStyle: {
        bottom: 0,
        left: 35,
        fontSize: 10
      }
    };
    return(
      <Badge
        badgeContent={notifications.length}
        primary={true}
        badgeStyle={styles.badgeStyle}
        style={styles.icon}
      >
        <IconMenu
          iconButtonElement={
            <IconButton style={styles.icon}>
              <FontIcon className="material-icons" color={Colors.white}>notifications</FontIcon>
            </IconButton>
          }
          anchorOrigin={styles.anchorOrigin}
          targetOrigin={styles.targetOrigin}
        >
          {this._renderMessages()}
        </IconMenu>
      </Badge>
    );
  }
}

UserNotification.propTypes = {
  notifications: React.PropTypes.array
};

export default UserNotification;
