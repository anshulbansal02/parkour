import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const searchBar = () => {
  const [inputText, setInputText] = useState('');
  const [placeholderState, setPlaceholderState] = useState('flex');

  const handleChange = (e) => {
    if (inputText) {
      setPlaceholderState('none');
    } else {
      setPlaceholderState('flex');
    }
    setInputText(e.nativeEvent.text);
  };

  return (
    <View style={styles.barContainer}>
      <View style={styles.overlayContainer}>
        <Icon name="search" size={24} color="rgba(0,0,0,0.2)" />
        <Text style={[styles.placeholder, {display: placeholderState}]}>
          Search for plans
        </Text>
      </View>
      <TextInput
        value={inputText}
        onChange={handleChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 52,
    borderWidth: 2,
    paddingLeft: 56,
    paddingRight: 16,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 12,
    marginBottom: 16,
  },

  overlayContainer: {
    position: 'absolute',
    left: 16,
    top: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholder: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: 'rgba(0,0,0,0.57)',
    marginLeft: 16,
  },
});

export default searchBar;
