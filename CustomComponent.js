import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connectStyle } from 'native-base';

class CustomComponent extends Component {
  render() {
    const styles = this.props.style;
    return (
      <View style={styles.container}>
        <Text style={styles.textContent}>
          Hello Custom Component
        </Text>
      </View>
    );
  }
}

const defaultStyles = {
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  textContent: {
    fontSize: 20,
    color: 'red',
  },
};

export default connectStyle('myTheme.CustomComponent', defaultStyles)(CustomComponent);