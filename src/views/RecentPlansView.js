import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';

import 'react-native-get-random-values';
import {nanoid} from 'nanoid';

import PlanCard from './../components/PlanCard';
import PillsFilter from './../components/PillsFilter';
import FAB from './../components/FAB';
import SearchBar from './../components/SearchBar';

const pills = [
  {label: 'All', id: nanoid()},
  {label: 'Diet', id: nanoid()},
  {label: 'Workout', id: nanoid()},
];

const RecentPlansView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Parkour</Text>
        {/* <TextInput style={styles.searchBar} placeholder="Search for plans" /> */}
        <SearchBar />

        <PillsFilter pills={pills} />
      </View>

      <ScrollView style={styles.planList}>
        <Text style={styles.subHeading}>Recent Plans</Text>

        <PlanCard />
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </ScrollView>
      <FAB />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0', // Change to #fbfbfb
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  logo: {
    fontFamily: 'KronaOne',
    fontSize: 24,
    textTransform: 'uppercase',
    marginBottom: 8,
  },

  searchBar: {
    height: 56,
    paddingHorizontal: 24,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 12,
    marginBottom: 16,
  },

  subHeading: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    textTransform: 'uppercase',
    color: 'rgba(0,0,0,0.67)',
    marginVertical: 12,
    marginLeft: 16,
  },

  planList: {
    // paddingHorizontal: 8,
  },
});

export default RecentPlansView;
