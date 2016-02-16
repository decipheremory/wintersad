// userExport.js

import React from 'react';
import Badge from 'material-ui/lib/badge';
import IconButton from 'material-ui/lib/icon-button';

class UserExport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { exports } = this.props;
    const styles = {
      icon: {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
      },
      badge: {
        bottom: 25,
        left: 35,
        fontSize: 10
      }
    };

    return(
      <Badge
        badgeContent={exports.length}
        primary={true}
        badgeStyle={styles.badge}
        style={styles.icon}
      >
        <IconButton
          tooltip="Export"
          style={styles.icon}
        >
          <img src={'lib/img/export.png'} />
        </IconButton>
      </Badge>
    );
  }
}

UserExport.propTypes = {
  exports: React.PropTypes.array
};

export default UserExport;
