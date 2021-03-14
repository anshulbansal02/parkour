import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AddItemView, EditSlotView, PlanView} from './../views';

const ModalsNavigator = () => {
  const ModalsStack = createStackNavigator();

  return (
    <ModalsStack.Navigator headerMode="none" mode="modal">
      <ModalsStack.Screen name="Plan" component={PlanView} />

      <ModalsStack.Screen name="EditSlot" component={EditSlotView} />
      <ModalsStack.Screen name="AddItem" component={AddItemView} />
    </ModalsStack.Navigator>
  );
};

export default ModalsNavigator;
