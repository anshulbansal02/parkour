import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from './../styles';

const AddItemView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Add Item Modal</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AddItemView;
