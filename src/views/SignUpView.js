import React from 'react';
import {View, Text, Button} from 'react-native';

import styles from './../styles';

const SignUpView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Sign Up View</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Sign Up" onPress={() => navigation.navigate('AppTabs')} />
      <Button title="Log In" onPress={() => navigation.navigate('LogIn')} />
      <Button
        title="Forgot Password"
        onPress={() => navigation.navigate('ResetPassword')}
      />
    </View>
  );
};

export default SignUpView;
