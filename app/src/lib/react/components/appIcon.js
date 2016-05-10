// appIcon.js

import React from 'react';


class AppIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(appItem) {
    if(_paq) {
      _paq.push(['trackLink', appItem.url, 'link']);
    }
  }

  render() {
    const { appItem } = this.props;
    const styles = {
      label: {
        fontSize: 12,
        fontFamily: 'sans-serif'
      },
      li: {
        float: 'left',
        height: 80,
        width: 120,
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        color: '#444'
      }
    };
    return(
      <li>
        <a href={appItem.url} target={appItem.target} onClick={this.handleClick.bind(this, appItem)}>
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
