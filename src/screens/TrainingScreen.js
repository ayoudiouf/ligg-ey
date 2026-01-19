import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, useTheme, Chip, Text } from 'react-native-paper';
import { TRAINING } from '../data/mockData';

const TrainingScreen = () => {
  const theme = useTheme();

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} style={{ height: 150 }} />
      <Card.Content style={{ marginTop: 10 }}>
        <Title style={{ color: theme.colors.primary }}>{item.title}</Title>
        <Paragraph style={{ fontWeight: 'bold' }}>{item.provider}</Paragraph>
        <View style={styles.row}>
            <Chip icon="clock-outline" style={styles.chip}>{item.duration}</Chip>
            <Chip icon="tag-outline" style={styles.chip}>{item.category}</Chip>
        </View>
        <Text style={{ marginTop: 5, color: theme.colors.secondary, fontWeight: 'bold' }}>{item.price}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" buttonColor={theme.colors.primary}>Enroll Now</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={TRAINING}
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
  list: {
    padding: 10,
  },
  card: {
    marginBottom: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  row: {
      flexDirection: 'row',
      marginTop: 5,
      marginBottom: 5,
      flexWrap: 'wrap',
  },
  chip: {
      marginRight: 5,
      marginBottom: 5,
      backgroundColor: '#f0f0f0',
  }
});

export default TrainingScreen;
