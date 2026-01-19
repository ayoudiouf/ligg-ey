import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Chip, Searchbar, useTheme } from 'react-native-paper';
import { JOBS } from '../data/mockData';

const JobsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const onChangeSearch = query => setSearchQuery(query);

  const filteredJobs = JOBS.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={{ color: theme.colors.primary }}>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
        <View style={styles.row}>
          <Chip icon="cash" style={styles.chip} selectedColor={theme.colors.secondary}>{item.budget}</Chip>
          <Chip icon="map-marker" style={styles.chip}>{item.location}</Chip>
          {item.category && <Chip icon="tag" style={styles.chip}>{item.category}</Chip>}
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Searchbar
        placeholder="Search jobs, locations..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={filteredJobs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    margin: 10,
    elevation: 2,
  },
  list: {
    padding: 10,
    paddingTop: 0,
  },
  card: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  chip: {
    marginRight: 5,
    marginBottom: 5,
  },
});

export default JobsScreen;
