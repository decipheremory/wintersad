/**
 * headerWrapper.js
 *
 * A high order component for app header.
 *
 */

import React from 'react';
import { Map } from 'immutable';

/**
 * @param  {ReactClass} ComposedComponent [React component]
 * @return {ReactClass}
 */
export const HeaderWrapper = ComposedComponent => {

  return React.createClass({

    getInitialState() {
      return {
        user: new Map()
      };
    },

    componentWillReceiveProps(nextProps) {
      if (nextProps['user']) {
        this.setState({ user: nextProps.user });
      }
    },

    _hasUserData() {
      return this.state.user.getIn(['user', 'userData']);
    },

    _hasMessages() {
      return this.state.user.getIn(['user', 'messages']);
    },

    _getUserDisplayName() {
      return `${this.state.user.getIn(['user', 'userData', 'displayName'])}`;
    },

    render() {
      return <ComposedComponent
        getUserDisplayName={() => this._getUserDisplayName()}
        hasMessages={() => this._hasMessages()}
        hasUserData={() => this._hasUserData()}
        user={this.state.user}
        {...this.props}
      />;
    }

  });

};
