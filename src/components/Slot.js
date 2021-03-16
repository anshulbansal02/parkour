import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ItemChip from './ItemChip';

const Slot = () => {
  return (
    <View style={styles.slot}>
      <View style={styles.Header}>
        <View>
          <View style={styles.titleContatiner}>
            <View style={styles.titleDash} />
            <Text style={styles.title}>Morning</Text>
          </View>
          <Text style={styles.slotNutrition}>
            Lorem ipsum dolor sit amet, iade opset. 2400K
          </Text>
        </View>
        <Pressable style={styles.deleteButton}>
          <Icon name="ios-trash-outline" size={20} color="#EE4343" />
        </Pressable>
      </View>

      <View style={styles.slotItems}>
        <ItemChip title="Dolor sit amet" />
        <ItemChip title="Dolor amet" />
        <ItemChip title="Dolor sit amet" />
        <ItemChip title="amet" />
        <ItemChip title="Dolor sit amet" />
        <ItemChip title="Hello" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slot: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.08)',
    paddingVertical: 16,
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  titleContatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontFamily: 'Inter-Medium',
  },

  titleDash: {
    width: 24,
    height: 4,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#39D179',
  },

  deleteButton: {
    backgroundColor: '#FFE5E5',
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slotItems: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Slot;
