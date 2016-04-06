// contextSearch.js
import _ from 'lodash';
import React from 'react';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FontIcon from 'material-ui/lib/font-icon';
import Checkbox from 'material-ui/lib/checkbox';
import Colors from 'material-ui/lib/styles/colors';
import Dispatcher from '../api/dispatcher';
import HeaderMgr from '../mgrs/headerMgr';
import config from '../../headerConfig';


class ContextSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      valueMultiple: [this.props.defaultSource],
      allSources: [] , 
      checkedArray: [] 
    };

    this._handleSearchEnter = this._handleSearchEnter.bind(this);
    this._onSourcesUpdate = this._onSourcesUpdate.bind(this);
    this._handleAllChecked = this._handleAllChecked.bind(this);
    this._handleCheck = this._handleCheck.bind(this);
    Dispatcher.subscribe('searchSourcesUpdated', this._onSourcesUpdate.bind(this));
  }

  componentWillMount() {
    HeaderMgr.fetchBsxSources();
  }

  _onSourcesUpdate(eventObj) {
    var tempSources = eventObj.data;
    var sourceNameArr = [];
    tempSources.map(function(src, index) {
      sourceNameArr.push(src.id);
    });

    this.setState({
      sources: eventObj.data,
      allSources: sourceNameArr,
      checkedArray: this.state.valueMultiple
    });

    //default to all sources for chimera search
    if (this.state.valueMultiple.indexOf('search') !== -1) {
      this.setState({
        checkedArray: sourceNameArr 
      });
    }
  }

  _handleSearchEnter() {
    let selectedSrc = this.state.checkedArray;
    let query = this.refs.contextSearchField.getValue();

    if (config.useLegacySearch) {
      window.location.href = `${config.csxProxyEndpoint}?query=${query}&index=${selectedSrc}`;
    } else {
      const data = {
        searchTerm: query,
        sources: selectedSrc
      };
      Dispatcher.publish('performHeaderSearch', data);
    }
  }

  _handleAllChecked(e, checked) {  
    if (checked) {
      var selectedSources = this.state.allSources;
      this.setState({
        valueMultiple: selectedSources,
        checkedArray: this.state.allSources 
      });
    } else  {
      this.setState({valueMultiple: [], checkedArray: []});
    }
  }

  _handleCheck(s, checked) {
    if (checked) {
      this.setState({checkedArray: this.state.checkedArray.concat(s.id)});
    } else {
      this.setState({checkedArray: this.state.checkedArray.filter((id) => id !== s.id)});
    }
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
        marginLeft: 10,
        color: Colors.grey700
      },
      selectedItems: {
        color: Colors.grey900
      },
      menuBorder: {
        borderBottom: '1px solid #f5f5f5'
      }

    };

    const helpPageUrl = `${config.csxProxySearchHelpEndpoint}`;

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
          closeOnItemTouchTap={false} 
          selectedMenuItemStyle={styles.selectedItems}
        >

            <MenuItem
              key='search' 
              value='search'
              primaryText={
                <div style={{paddingLeft: '20px'}}>
                  <FontIcon className='material-icons' style={{verticalAlign: 'middle'}}>all_out</FontIcon> Search All Chimera
                </div>
              }
              leftCheckbox={
                <Checkbox
                  style={{top: '5px'}}
                  checked={this.state.checkedArray.length  === this.state.allSources.length} 
                  onCheck={this._handleAllChecked} 
                  iconStyle={{
                    fill: '#333'
                  }}/> 
              }/>

            <div style={styles.sourceTypeLabel}>Internal Data</div>
            {
              this.state.sources.filter((s) => s.internal).map((s) => {
               
                return (
  
                  <MenuItem
                    key={s.id}
                    value={s.id}
                    className={styles.menuBorder}
                    primaryText={
                      <div style={{paddingLeft: '20px'}}>
                        <FontIcon className='material-icons' style={{verticalAlign: 'middle'}}>{s.style.iconClassName}</FontIcon> {s.name}
                      </div>
                    }
                    leftCheckbox={
                      <Checkbox
                        style={{top: '5px'}}
                        checked={this.state.checkedArray.indexOf(s.id) !== -1}
                        onCheck={(e, checked) => this._handleCheck(s, checked)}
                        iconStyle={{
                          fill: '#333'
                        }}/>
                    }/>
                );
              })
            }

            <div style={styles.sourceTypeLabel}>External Data</div>
            {
              this.state.sources.filter((s) => !s.internal).map((s) => {
                return (
                  <MenuItem
                    key={s.id}
                    value={s.id}
                    className={styles.menuBorder}
                    primaryText={
                      <div style={{paddingLeft: '20px'}}>
                        <FontIcon className='material-icons' style={{verticalAlign: 'middle'}}>{s.style.iconClassName}</FontIcon> {s.name}
                      </div>
                    }
                    leftCheckbox={
                      <Checkbox
                        style={{top: '5px'}}
                        checked={this.state.checkedArray.indexOf(s.id) !== -1}
                        onCheck={(e, checked) => this._handleCheck(s, checked)}
                        iconStyle={{
                          fill: '#333'
                        }}/>
                 }/>
                );
              })
            }
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

        <a href={helpPageUrl} target="_blank">
        <IconButton
          tooltip="Search Help"
          style={styles.icon}
        >
          <img src={'./lib/img/help.png'} />
        </IconButton>
        </a>

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
