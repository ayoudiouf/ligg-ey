import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import { Title, Paragraph, Avatar, Button, Card, useTheme, Text } from 'react-native-paper';

const ArtisanProfileScreen = ({ route }) => {
  const { artisan } = route.params;
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.surfaceVariant }]}>
        <Avatar.Text 
            size={100} 
            label={artisan.name[0]} 
            style={{ backgroundColor: theme.colors.primary }}
            color={theme.colors.onPrimary}
        />
        <Title style={[styles.name, { color: theme.colors.onSurface }]}>{artisan.name}</Title>
        <Paragraph style={[styles.skill, { color: theme.colors.secondary }]}>{artisan.skill}</Paragraph>
        <View style={styles.badgeContainer}>
            <View style={[styles.badge, { backgroundColor: theme.colors.primaryContainer }]}>
                <Text style={{ color: theme.colors.onPrimaryContainer }}>{artisan.location}</Text>
            </View>
            <View style={[styles.badge, { backgroundColor: '#FFD700' }]}>
                <Text style={{ color: 'black' }}>{artisan.rating} ⭐</Text>
            </View>
        </View>
      </View>

      <View style={styles.section}>
        <Title style={styles.sectionTitle}>About</Title>
        <Paragraph style={styles.aboutText}>{artisan.about}</Paragraph>
      </View>

      <View style={styles.section}>
        <Title style={styles.sectionTitle}>Portfolio</Title>
        {artisan.portfolio && artisan.portfolio.length > 0 ? (
            <View style={styles.portfolioGrid}>
                {artisan.portfolio.map((item) => (
                    <Card key={item.id} style={styles.portfolioCard}>
                        <Card.Cover source={{ uri: item.image }} style={styles.portfolioImage} />
                        <Card.Content style={styles.portfolioContent}>
                            <Text variant="bodyMedium" numberOfLines={1}>{item.title}</Text>
                        </Card.Content>
                    </Card>
                ))}
            </View>
        ) : (
            <Paragraph style={{ fontStyle: 'italic', color: 'gray' }}>No portfolio items uploaded yet.</Paragraph>
        )}
      </View>

      <View style={styles.actions}>
        <Button 
            mode="contained" 
            onPress={() => console.log('Contact')}
            buttonColor={theme.colors.primary}
            style={styles.contactButton}
        >
          Contact Artisan
        </Button>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');
const cardWidth = (width - 40 - 10) / 2; // (Screen Width - Padding - Gap) / 2

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
  },
  skill: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  badgeContainer: {
      flexDirection: 'row',
      marginTop: 10,
  },
  badge: {
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: 20,
      marginHorizontal: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  aboutText: {
      fontSize: 16,
      lineHeight: 24,
  },
  portfolioGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
  },
  portfolioCard: {
      width: cardWidth,
      marginBottom: 15,
  },
  portfolioImage: {
      height: 120,
  },
  portfolioContent: {
      paddingVertical: 10,
      paddingHorizontal: 5,
  },
  actions: {
    padding: 20,
    paddingBottom: 40,
  },
  contactButton: {
      paddingVertical: 8,
  },
});

export default ArtisanProfileScreen;
