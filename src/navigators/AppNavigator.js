import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RecentPlansView from './../views/RecentPlansView';
import InventoryView from './../views/InventoryView';
import ProfileView from './../views/ProfileView';

const AppNavigator = () => {
  const AppTabs = createBottomTabNavigator();

  return (
    <AppTabs.Navigator>
      <AppTabs.Screen name="Home" component={RecentPlansView} />
      <AppTabs.Screen name="Inventory" component={InventoryView} />
      <AppTabs.Screen name="Profile" component={ProfileView} />
    </AppTabs.Navigator>
  );
};

export default AppNavigator;
