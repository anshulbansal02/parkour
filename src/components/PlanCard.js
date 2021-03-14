import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PlanCard = () => {
  return (
    <View style={styles.cardShadow}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>John's Fatloss Program</Text>
            <Text style={styles.date}>16th March 2018</Text>
          </View>
        </View>
        <Text style={styles.description}>
          Proin suscipit, tortor nisl, non ornare urna, pharetra, donec,
          suspendisse ,quis rutrum, egestas risus, imperdiet, convallis
          ultrices...
        </Text>
        <View style={styles.separator} />
        <View style={styles.nutritionList}>
          <Text style={styles.nutrition}>1470k Calorie</Text>
          <Text style={styles.nutrition}>546g Protein</Text>
          <Text style={styles.nutrition}>870g Carb</Text>
          <Text style={styles.nutrition}>120g Fat</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 8,
    marginHorizontal: 8,
  },

  header: {
    marginBottom: 8,
  },

  title: {
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    // lineHeight: 20,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },

  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginVertical: 12,
  },

  nutritionList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nutrition: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
});

export default PlanCard;
