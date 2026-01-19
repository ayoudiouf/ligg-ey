import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// Use require for icons if we were using images, but we will use text or simple views for now if vector icons fail, 
// but Expo usually handles vector icons well. Let's try to use them or fallbacks.
// To be safe and simple without vector-icons dependency issues if not linked, I'll use simple text labels for now, 
// or import Ionicons from @expo/vector-icons which is standard in Expo.
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import JobsScreen from '../screens/JobsScreen';
import TrainingScreen from '../screens/TrainingScreen';
import ArtisansScreen from '../screens/ArtisansScreen';
import ArtisanProfileScreen from '../screens/ArtisanProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Jobs') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Training') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Artisans') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Liggéey' }} />
      <Tab.Screen name="Jobs" component={JobsScreen} />
      <Tab.Screen name="Training" component={TrainingScreen} />
      <Tab.Screen name="Artisans" component={ArtisansScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={MainTabs} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ArtisanProfile" 
          component={ArtisanProfileScreen} 
          options={{ title: 'Artisan Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
