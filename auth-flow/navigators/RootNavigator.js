import React from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import CenteredContent from '../components/CenteredContent';
import AuthNavigator from './AuthNavigator';

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 1000);
  }

  render() {
    return (
      <CenteredContent>
        <Text>Splash</Text>
      </CenteredContent>
    );
  }
}

const AppScreen = () => (
  <CenteredContent>
    <Text>App</Text>
  </CenteredContent>
);

export default createSwitchNavigator({
  Splash: SplashScreen,
  Auth: AuthNavigator,
  App: AppScreen
});
