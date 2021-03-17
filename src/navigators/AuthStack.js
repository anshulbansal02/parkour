import 'react-native-gesture-handler';
import React from 'react';
import {
  createStackNavigator,
  TransitionPreset,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {LogInView, SignUpView} from './../views';
import ResetPasswordView from './../views/ResetPasswordView';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="LogIn" component={LogInView} />
      <Stack.Screen name="SignUp" component={SignUpView} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordView} />
    </Stack.Navigator>
  );
};

export default AuthStack;
