import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Pill = ({label, handleTap, id, selected}) => {
  return (
    <TouchableHighlight
      underlayColor="#fbfbfb"
      style={[styles.pill, selected ? styles.selectedPill : null]}
      onPress={() => handleTap(id)}>
      <Text
        style={[styles.pillLabel, selected ? styles.selectedPillLabel : null]}>
        {label}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  pills: {
    flexDirection: 'row',
  },

  pill: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.57)',
    borderRadius: 100,
  },

  selectedPill: {
    backgroundColor: 'rgba(0,0,0,0.87)',
  },

  selectedPillLabel: {
    color: '#fff',
  },

  pillLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: 'rgba(0,0,0,0.67)',
  },
});

export default Pill;
