// appIcon.js

import React from 'react';


class AppIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { appItem } = this.props;
    const styles = {
      label: {
        fontSize: 12
      },
      li: {
        float: 'left',
        height: 64,
        width: 88,
        paddingTop: 18,
        paddingBottom: 18,
        textAlign: 'center',
        color: '#444'
      }
    };
    return(
      <li>
        <a href={appItem.url}>
          <i style={styles.li} className={appItem.icon}>
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
