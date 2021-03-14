import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from '../styles';

const LogInView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Log In View</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Log In"
        onPress={() => navigation.navigate('AppNavigator')}
      />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      <Button
        title="Forgot Password"
        onPress={() => navigation.navigate('ResetPassword')}
      />
    </View>
  );
};

export default LogInView;
