import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import Pill from './Pill';

const PillsFilter = ({pills}) => {
  const [selectedPill, setSelectedPill] = useState(null);

  const handlePillSelect = (pillId) => {
    setSelectedPill(pillId);
  };

  const renderPills = () => {
    return pills.map(({label, id}) => {
      return selectedPill === id ? (
        <Pill
          label={label}
          key={id}
          id={id}
          handleTap={handlePillSelect}
          selected={true}
        />
      ) : (
        <Pill label={label} key={id} id={id} handleTap={handlePillSelect} />
      );
    });
  };

  return <View style={styles.pills}>{renderPills()}</View>;
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

export default PillsFilter;
