import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00695C', // Teal 800
    onPrimary: '#FFFFFF',
    primaryContainer: '#B2DFDB',
    onPrimaryContainer: '#004D40',
    secondary: '#E65100', // Orange 900
    onSecondary: '#FFFFFF',
    secondaryContainer: '#FFE0B2',
    onSecondaryContainer: '#BF360C',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    surfaceVariant: '#F5F5F5',
    text: '#263238',
    placeholder: '#78909C',
    error: '#B00020',
  },
  roundness: 12,
};
