import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from './../styles';

const PlanView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Plan View</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Edit/Add Slot"
        onPress={() => navigation.push('EditSlot')}
      />
    </View>
  );
};

export default PlanView;
