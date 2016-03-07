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
      label: {
        fontSize: 12
      }
    };
    return(
      <li>
        <a href={appItem.url}>
          <i className={appItem.icon}>
            <br /><label style={styles.label}>{appItem.title}</label></i>
        </a>

      </li>

    );
  }
}

AppIcon.propTypes = {
  appItem: React.PropTypes.object.isRequired
};

export default AppIcon;
