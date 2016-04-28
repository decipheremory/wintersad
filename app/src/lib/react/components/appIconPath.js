// appIconPath.js

import React from 'react';


class AppIconPath extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { appItem } = this.props;
    const styles = {
      label: {
        fontSize: 12,
        fontStyle: 'normal',
        textAlign: 'center',
        fontFamily: 'robotolight, Helvetica Neue, Helvetica, Arial, sans-serif'
      },
      li: {
        float: 'left',
        height: 80,
        width: 120,
        marginTop: 5,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        color: '#444'
      },
      icon: {
        height: 42,
        width: 42,
        marginBottom: 5
      }
    };
    return(
      <li>
        <a href={appItem.url} target={appItem.target}>
          <i style={styles.li}>
            <img style={styles.icon} src={appItem.iconPath} height={styles.icon.height} width={styles.icon.width}/>
            <br /><label style={styles.label}>{appItem.title}</label>
          </i>
        </a>
      </li>
    );
  }
}

AppIconPath.propTypes = {
  appItem: React.PropTypes.object.isRequired
};

export default AppIconPath;
