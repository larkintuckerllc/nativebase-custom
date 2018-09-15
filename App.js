import Expo from 'expo';
import { Button, Container, Content, Header, StyleProvider, Text } from 'native-base';
import React from 'react';
import CustomComponent from './CustomComponent';
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

const baseTheme = getTheme(custom);
const theme = {
  ...baseTheme,
  'myTheme.CustomComponent': {
    container: {
      flex: 1,
      backgroundColor: 'blue',
    },
    textContent: {
      fontSize: 20,
      color: 'yellow',
    },
  }
};

export default class App extends React.Component {
  componentDidMount() {
    Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <StyleProvider style={theme}>
        <Container>
          <Header />
          <Content>
            <Button onPress={this.handlePress}>
              <Text>Click Me!</Text>
            </Button>
            <Button style={{ backgroundColor: 'green' }} onPress={this.handlePress}>
              <Text>Click Me in Green!</Text>
            </Button>
            <Button onPress={this.handlePress}>
              <Text style={{ color: 'yellow' }}>
                Click Me Text in Yellow!
              </Text>
            </Button>
            <CustomComponent />
          </Content>
        </Container>
      </StyleProvider>
    );
  }

  handlePress = () => {
  }
}
