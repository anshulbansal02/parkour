import React from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import Slot from '../components/Slot';

const PlanView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>13-02-21</Text>
      <View stye={styles.headingRow}>
        <Text style={styles.planTitle}>Untitled Plan</Text>
        <Pressable style={styles.transparentBtn}>
          <Text style={styles.btnText}>Edit</Text>
        </Pressable>
      </View>
      <View style={styles.nutriBar}>
        <View style={styles.nutriItem}>
          <Text style={styles.nutriValue}>1400k</Text>
          <Text style={styles.nutriLabel}>Calories</Text>
        </View>
        <View style={styles.nutriItem}>
          <Text style={styles.nutriValue}>452g</Text>
          <Text style={styles.nutriLabel}>Protein</Text>
        </View>
        <View style={styles.nutriItem}>
          <Text style={styles.nutriValue}>201</Text>
          <Text style={styles.nutriLabel}>Carbs</Text>
        </View>
        <View style={styles.nutriItem}>
          <Text style={styles.nutriValue}>930g</Text>
          <Text style={styles.nutriLabel}>Fat</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Slots</Text>

      <View stlye={styles.slotsList}>
        <Slot />
        <Slot />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    flex: 1,
  },

  date: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },

  headingRow: {
    flexDirection: 'row',
    backgroundColor: 'green',
    marginBottom: 24,
  },

  planTitle: {
    fontSize: 28,
    fontFamily: 'Inter-SemiBold',
  },

  transparentBtn: {
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

  nutriBar: {
    backgroundColor: '#fff',
    elevation: 6,
    borderRadius: 12,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 24,
  },

  nutriItem: {
    alignItems: 'center',
  },

  nutriValue: {
    fontSize: 20,
    fontFamily: 'Inter-Medium',
  },

  nutriLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: 'rgba(0,0,0,0.67)',
  },

  subtitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    textTransform: 'uppercase',
    color: 'rgba(0,0,0,0.67)',
  },
});

export default PlanView;
