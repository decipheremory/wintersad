// contextSearch.js
import _ from 'lodash';
import React from 'react';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import Divider from 'material-ui/lib/divider';
import Dispatcher from '../api/dispatcher';
import HeaderMgr from '../mgrs/headerMgr';

class ContextSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      valueMultiple: [this.props.defaultSource]
    };
    this._handleChangeMultiple = this._handleChangeMultiple.bind(this);
    this._renderMenuItems = this._renderMenuItems.bind(this);
    this._handleSearchEnter = this._handleSearchEnter.bind(this);
    this._onSourcesUpdate = this._onSourcesUpdate.bind(this);
    Dispatcher.subscribe('searchSourcesUpdated', this._onSourcesUpdate.bind(this));

  }

  componentWillMount() {
    HeaderMgr.fetchBsxSources();
  }

  _onSourcesUpdate(eventObj) {
    this.setState({
      sources: eventObj.data
    });
  }

  _handleChangeMultiple(event, value) {
    this.setState({
      valueMultiple: value
    });
  }

  _handleSearchEnter() {
    // console.log(this.refs.contextSearchField.getValue());
    // TODO: implement callback here...
  }

  _renderMenuItems(sources, internal) {
    let fSources = _.reject(sources, function(src){
      return internal ? src.internal : !src.internal;
    });

    return fSources.map(function(src, index) {
      return (
        <MenuItem
          key={src.id+index}
          value={src.id}
          leftIcon={<FontIcon className="material-icons">{src.style.iconClassName}</FontIcon>}
          primaryText={src.name}
        />
      );
    });
  }

  render() {
    const styles = {
      icon: {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        width: 24,
        height: 24
      },
      underline: {
        borderColor: Colors.grey400
      },
      underlineFocus: {
        borderColor: Colors.grey100
      },
      input: {
        width: 500,
        color: Colors.grey100
      },
      hint: {
        color: Colors.grey400
      },
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom'
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top'
      },
      sourceTypeLabel: {
        fontSize: 'small',
        marginLeft: 10
      }

    };

    return(
      <div>
        <IconMenu
          desktop={true}
          iconButtonElement={
            <IconButton style={styles.icon}>
              <FontIcon className="material-icons" color={Colors.white}>search</FontIcon>
            </IconButton>
          }
          anchorOrigin={styles.anchorOrigin}
          targetOrigin={styles.targetOrigin}
          value={this.state.valueMultiple}
          onChange={this._handleChangeMultiple}
          multiple={true}
        >
          <MenuItem
            value="all"
            leftIcon={
              <FontIcon>
                <img style={styles.icon} src={'./lib/img/ChimeraLogo_v3_blk_256x256.png'} />
              </FontIcon>
            }
            primaryText="Search All Chimera"
          />
          <div style={styles.sourceTypeLabel}>Internal Data</div>
          {this._renderMenuItems(this.state.sources, false)}
          <Divider />
          <div style={styles.sourceTypeLabel}>External Data</div>
          {this._renderMenuItems(this.state.sources, true)}

        </IconMenu>
        <TextField
          hintText="Enter Search Query"
          underlineStyle={styles.underline}
          underlineFocusStyle={styles.underlineFocus}
          style={styles.input}
          hintStyle={styles.hint}
          inputStyle={styles.input}
          onEnterKeyDown={this._handleSearchEnter}
          ref='contextSearchField'
        />
        <IconButton
          tooltip="Search"
          style={styles.icon}
        >
          <img src={'./lib/img/help.png'} />
        </IconButton>
      </div>
    );
  }
}

ContextSearch.propTypes = {
  defaultSource: React.PropTypes.string
};

ContextSearch.defaultProps = {
};

export default ContextSearch;
