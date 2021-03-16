import React from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FAB = ({onPress: handlePress}) => {
  return (
    <View style={styles.fabContainer}>
      <Pressable
        style={styles.fab}
        android_ripple={{color: 'grey', borderless: true}}
        onPress={handlePress}>
        <Icon name="plus" size={24} color="#fff" />
        <Text style={styles.label}>New Plan</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    backgroundColor: '#000',

    overflow: 'hidden',
    bottom: 16,
    right: 16,
    elevation: 8,
    borderRadius: 50,
  },

  fab: {
    // width: '100%',
    // height: '100%',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginHorizontal: 8,
  },
});

export default FAB;
