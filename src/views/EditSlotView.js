import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {nanoid} from 'nanoid';

import ItemChip from './../components/ItemChip';
import FloatingInput from '../components/FloatingInput';

const EditSlotView = ({navigation}) => {
  const [items, setItems] = useState(['lroem']);

  const renderItems = () => {
    if (items.length > 0) {
      return items.map((title) => <ItemChip key={nanoid()} title={title} />);
    } else {
      return (
        <Text style={styles.emptyItems}>
          You don't have any item in your slot, use the below button to add
          some.
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Slot</Text>
      <TextInput style={styles.input} placeholder="Write slot title here" />

      <View style={styles.slotItemsContainer}>
        <Text style={styles.subtitle}>Slot items</Text>

        <View style={styles.slotItems}>{renderItems()}</View>
      </View>

      <FloatingInput />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyItems: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    width: '85%',
    alignSelf: 'center',
    color: '#0f0f0f',
  },

  slotItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  container: {
    // padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },

  input: {
    fontSize: 24,
    marginBottom: 24,
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontFamily: 'Inter-SemiBold',
  },

  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
});

export default EditSlotView;
