/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StatusBar, View, Text
} from 'react-native';
import SYAWebView from './src/components/SYAWebView'



export default class App extends Component {

  state = {
    isVisibaleWebView: false
  }

  toggleWebView = () => {
    this.setState({
      isVisibaleWebView: !this.state.isVisibaleWebView
    })
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        {!this.state.isVisibaleWebView ?
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={this.toggleWebView}
              style={{ justifyContent: 'center', alignSelf: 'center', borderWidth: 2, borderRadius: 5 }}>
              <Text style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                BestBuy
          </Text>
            </TouchableOpacity>
          </View> :
          <SYAWebView
            toggleWebView={this.toggleWebView} />}
      </>
    );
  };
};
