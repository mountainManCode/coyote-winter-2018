import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

class Loader extends Component {
  render() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default Loader;
