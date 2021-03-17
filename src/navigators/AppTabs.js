import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {RecentPlansView, InventoryView, ProfileView} from './../views';

const AppTabs = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={RecentPlansView} />
      <Tabs.Screen name="Inventory" component={InventoryView} />
      <Tabs.Screen name="Profile" component={ProfileView} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
