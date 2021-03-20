import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

const ItemChip = ({title}) => {
  return (
    <View style={styles.itemChip}>
      <Pressable style={styles.item}>
        <Text style={styles.itemLabel}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  // itemChip: {
  //   alignSelf: 'flex-start',
  // },
  itemLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#1056B3',
  },

  item: {
    backgroundColor: '#EBF2FF',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 24,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#5498F1',
  },
});

export default ItemChip;
