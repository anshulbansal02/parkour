import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const BottomSheet = () => {
  return (
    <View style={styles.bottomSheetContainer}>
      <View style={styles.bottomSheet}>
        <View style={styles.sheetHandle} />
        <Text style={styles.title}>Sort Plans by</Text>

        <View style={styles.optionsList}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionLabel}>Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionLabel}>Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionLabel}>Calories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionLabel}>Protein</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: 'rgba(0,0,0,0.55)',
    // blurRadius: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  title: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 16,
  },

  sheetHandle: {
    width: 40,
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 24,
  },

  bottomSheet: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingBottom: 40,
    width: '100%',
    elevation: 20,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0,
    alignItems: 'center',
  },

  optionsList: {},

  option: {
    paddingVertical: 8,
    marginVertical: 4,
  },

  optionLabel: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
});

export default BottomSheet;
