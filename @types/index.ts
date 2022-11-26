import { Text, View } from 'react-native';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ViewProps = ThemeProps & View['props'];
export type TextProps = ThemeProps & Text['props'];
