import 'react-native-gesture-handler';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {LogInView, SignUpView, ResetPasswordView} from './../views';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="LogIn" component={LogInView} />
      <Stack.Screen name="SignUp" component={SignUpView} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordView} />
    </Stack.Navigator>
  );
};

export default AuthStack;
