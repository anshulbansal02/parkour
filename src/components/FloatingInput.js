import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';

const FloatingInput = ({onSubmit: submitInput, navigation}) => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.floatingInputBox}>
      <TextInput
        style={styles.floatingInput}
        autoFocus={true}
        maxLength={50}
        placeholder="New item"
        blurOnSubmit={false}
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        onSubmitEditing={() => {
          submitInput(inputText);
          setInputText('');
        }}
      />

      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.transparentBtn}>
        <Text style={styles.btnText}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingInputBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
  },

  floatingInput: {
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingLeft: 24,
    paddingRight: '25%',
    paddingVertical: 12,
    height: 56,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    width: '100%',
  },

  transparentBtn: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },

  btnText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#167EFB',
  },
});

export default FloatingInput;
