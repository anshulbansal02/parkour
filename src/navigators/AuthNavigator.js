import 'react-native-gesture-handler';
import React from 'react';
import {
  createStackNavigator,
  TransitionPreset,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {LogInView, SignUpView} from './../views';
import ResetPasswordView from './../views/ResetPasswordView';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="LogIn" component={LogInView} />
      <AuthStack.Screen name="SignUp" component={SignUpView} />
      <AuthStack.Screen name="ResetPassword" component={ResetPasswordView} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
