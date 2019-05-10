import React from 'react';
import { Text } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Button from '../components/Button';
import CenteredContent from '../components/CenteredContent';

const FinishScreen = ({ navigation }) => (
  <CenteredContent>
    <Button text='Finish' onPress={() => navigation.navigate('Success')} />
  </CenteredContent>
);

const LoginScreen = ({ navigation }) => (
  <CenteredContent>
    <Text>Log in</Text>
    <Button text='Login' onPress={() => navigation.navigate('Finish')} />
    <Button text='Sign up' onPress={() => navigation.navigate('Signup')} />
  </CenteredContent>
);

const SignupScreen = ({ navigation }) => (
  <CenteredContent>
    <Text>Sign up</Text>
    <Button text='Login' onPress={() => navigation.navigate('Login')} />
    <Button text='Sign up' onPress={() => navigation.navigate('Finish')} />
  </CenteredContent>
);

const SuccessScreen = ({ navigation }) => (
  <CenteredContent>
    <Text>Success</Text>
    <Button text='Goto app' onPress={() => navigation.navigate('App')} />
  </CenteredContent>
);

const LoginStack = createStackNavigator({
  Login: LoginScreen,
  Finish: FinishScreen
});

const SignupStack = createStackNavigator({
  Signup: SignupScreen,
  Finish: FinishScreen
});

const AuthStack = createSwitchNavigator({
  Login: LoginStack,
  Signup: SignupStack,
  Success: SuccessScreen
});

export default AuthStack;
