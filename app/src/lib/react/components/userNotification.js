// userNotification.js

import React from 'react';
import Badge from 'material-ui/lib/badge';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';

class UserNotification extends React.Component {
  constructor(props) {
    super(props);
    this._renderMessages = this._renderMessages.bind(this);
  }

  _renderMessages() {

    if(this.props.user.getIn(['user', 'messages']).size > 0) {
      return this.props.user.getIn(['user', 'messages']).map(function(message, index) {
        let iconType = message.get('type') === 'warning' ? 'warning' : 'error';
        return (
          <MenuItem
            key={index}
            primaryText={message.get('message')}
            leftIcon={<FontIcon className="material-icons">{iconType}</FontIcon>}
          />
        );
      });
    } else {
      return (
        <MenuItem
          key={0}
          primaryText='You have no notifications.'
        />
      );
    }
  }

  render() {
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
        marginRight: 10,
        display: 'block',
        float: 'left'
      },
      badgeStyle: {
        bottom: 0,
        left: 35,
        fontSize: 10,
        textAlign: 'center',
        paddingTop: '5px'
      }
    };
    return(
      <Badge
        badgeContent={this.props.user.getIn(['user', 'messages']).size}
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
  user: React.PropTypes.object
};

export default UserNotification;
