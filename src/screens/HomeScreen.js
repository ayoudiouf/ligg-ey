import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Card, Title, Paragraph, Button, Text, useTheme, Surface } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Surface style={[styles.hero, { backgroundColor: theme.colors.primary }]} elevation={4}>
        <View style={styles.heroContent}>
          <Title style={[styles.heroTitle, { color: theme.colors.onPrimary }]}>Welcome to Liggéey</Title>
          <Paragraph style={[styles.heroSubtitle, { color: theme.colors.onPrimary }]}>
            Empowering Senegalese Artisans & Workers.
          </Paragraph>
          <Button 
            mode="contained" 
            style={styles.heroButton}
            buttonColor={theme.colors.secondary}
            textColor={theme.colors.onSecondary}
            onPress={() => navigation.navigate('Jobs')}
          >
            Find Work Now
          </Button>
        </View>
      </Surface>

      <View style={styles.section}>
        <Title style={styles.sectionTitle}>What are you looking for?</Title>
        
        <View style={styles.cardContainer}>
          <Card style={styles.card} onPress={() => navigation.navigate('Jobs')}>
            <Card.Cover source={{ uri: 'https://via.placeholder.com/300x150/E65100/FFFFFF?text=Jobs' }} />
            <Card.Content>
              <Title>Find Work</Title>
              <Paragraph>Browse jobs in your area.</Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card} onPress={() => navigation.navigate('Training')}>
            <Card.Cover source={{ uri: 'https://via.placeholder.com/300x150/00695C/FFFFFF?text=Training' }} />
            <Card.Content>
              <Title>Learn Skills</Title>
              <Paragraph>Vocational training.</Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card} onPress={() => navigation.navigate('Artisans')}>
             <Card.Cover source={{ uri: 'https://via.placeholder.com/300x150/1565C0/FFFFFF?text=Artisans' }} />
            <Card.Content>
              <Title>Hire Artisans</Title>
              <Paragraph>Connect with professionals.</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    opacity: 0.9,
  },
  heroButton: {
    paddingHorizontal: 20,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginLeft: 5,
  },
  cardContainer: {
    gap: 15,
  },
  card: {
    marginBottom: 5,
    borderRadius: 15,
  },
});

export default HomeScreen;
