// userProfile.js

import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconButton from 'material-ui/lib/icon-button';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { profileUrl } = this.props;
    const styles = {
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom'
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top'
      }
    };

    return(
      <IconMenu
        iconButtonElement={
          <IconButton>
            <FontIcon className="material-icons" color={Colors.white}>person</FontIcon>
          </IconButton>
        }
        anchorOrigin={styles.anchorOrigin}
        targetOrigin={styles.targetOrigin}
      >
        <MenuItem key={0}>
          <FlatButton
            label="Edit Profile"
            labelPosition="before"
            linkButton={true}
            href={profileUrl}
            primary={true}
          />
        </MenuItem>
      </IconMenu>
    );
  }
}

UserProfile.propTypes = {
  profileUrl: React.PropTypes.string
};

export default UserProfile;
