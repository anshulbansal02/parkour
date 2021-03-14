import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from './../styles';

const EditSlotView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Edit Slot View</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EditSlotView;
