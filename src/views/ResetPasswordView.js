import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from './../styles';

const ResetPasswordView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Reset Password View</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ResetPasswordView;
