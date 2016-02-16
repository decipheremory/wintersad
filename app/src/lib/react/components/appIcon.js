// appIcon.js

import React from 'react';

import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';


class AppIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { appItem } = this.props;
    const styles = {
      appcontainer: {
        display: 'block',
        float: 'left',
        width: 90,
        height: 90,
        marginRight: 10,
        marginBottom: 10
      },
      appicon: {
        fontSize: 56,
        paddingLeft: 8
      },
      labelStyle: {
        fontSize: 10
      }
    };
    return(
      <div style={styles.appcontainer}>
        <FontIcon
          className="material-icons"
          style={styles.appicon}
        >
          {appItem.icon}
        </FontIcon>
        <br/>
        <FlatButton
          label={appItem.title}
          labelStyle={styles.labelStyle}
          linkButton={true}
          href={appItem.url}
        />
      </div>
    );
  }
}

AppIcon.propTypes = {
  appItem: React.PropTypes.object.isRequired
};

export default AppIcon;
