import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import ModalsNavigator from './ModalsNavigator';

import BottomSheet from './../components/BottomSheet';

const MainNavigator = () => {
  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ebebeb" />
      <MainStack.Navigator initialRouteName="AuthNavigator" headerMode="none">
        <MainStack.Screen name="AuthNavigator" component={AuthNavigator} />
        <MainStack.Screen name="AppNavigator" component={AppNavigator} />
        <MainStack.Screen name="ModalsNavigator" component={ModalsNavigator} />
      </MainStack.Navigator>

      {/* <BottomSheet /> */}
    </NavigationContainer>
  );
};

export default MainNavigator;
