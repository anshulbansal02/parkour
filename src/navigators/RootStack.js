import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import AppTabs from './AppTabs';
import AuthStack from './AuthStack';

import {AddItemView, EditSlotView, PlanView} from '../views';

const RootStack = () => {
  console.log(Platform.OS);
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="AppTabs" component={AppTabs} />
      <Stack.Screen
        name="PlanModal"
        component={PlanView}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="SlotModal"
        component={EditSlotView}
        options={{
          cardStyleInterpolator:
            Platform.OS === 'ios'
              ? CardStyleInterpolators.forModalPresentationIOS
              : CardStyleInterpolators.forVerticalIOS,
        }}
      />
      <Stack.Screen
        name="ItemModal"
        component={AddItemView}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

// const MainNavigator = () => {
//   const MainStack = createStackNavigator();

//   return (
//     <NavigationContainer>
//       <StatusBar barStyle="dark-content" backgroundColor="#ebebeb" />
//       <MainStack.Navigator initialRouteName="AuthNavigator" headerMode="none">
//         <MainStack.Screen name="AuthNavigator" component={AuthNavigator} />
//         <MainStack.Screen name="AppNavigator" component={AppNavigator} />
//         <MainStack.Screen
//           name="ModalsNavigator"
//           component={ModalsNavigator}
//           options={{
//             cardStyleInterpolator:
//               CardStyleInterpolators.forRevealFromBottomAndroid,
//           }}
//         />
//       </MainStack.Navigator>

//       {/* <BottomSheet /> */}
//     </NavigationContainer>
//   );
// };

export default RootStack;
