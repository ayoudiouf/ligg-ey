import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Avatar, Button, Searchbar, useTheme } from 'react-native-paper';
import { ARTISANS } from '../data/mockData';

const ArtisansScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const onChangeSearch = query => setSearchQuery(query);

  const filteredArtisans = ARTISANS.filter(artisan => 
    artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    artisan.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
    artisan.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('ArtisanProfile', { artisan: item })}>
      <Card.Title
        title={item.name}
        subtitle={item.skill}
        titleStyle={{ fontWeight: 'bold' }}
        subtitleStyle={{ color: theme.colors.secondary }}
        left={(props) => <Avatar.Text {...props} label={item.name[0]} style={{ backgroundColor: theme.colors.primary }} color={theme.colors.onPrimary} />}
      />
      <Card.Content>
        <Paragraph numberOfLines={2}>{item.about}</Paragraph>
        <Paragraph style={{ marginTop: 5, fontWeight: 'bold' }}>{item.location} • {item.rating} ⭐</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button textColor={theme.colors.primary}>View Profile</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Searchbar
        placeholder="Search artisans, skills..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={filteredArtisans}
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
});

export default ArtisansScreen;
