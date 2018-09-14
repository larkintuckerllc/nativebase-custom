import Expo from 'expo';
import { Button, Container, Content, Header, Text } from 'native-base';
import React from 'react';

export default class App extends React.Component {
  componentDidMount() {
    Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button onPress={this.handlePress}>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  handlePress = () => {
  }
}
