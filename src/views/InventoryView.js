import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from './../styles';

const InventoryView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Inventory View</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Add/Edit Item"
        onPress={() =>
          navigation.navigate('ModalsNavigator', {screen: 'AddItem'})
        }
      />
    </View>
  );
};

export default InventoryView;
