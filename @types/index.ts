/* eslint-disable filenames/match-regex */
import { Text, View, SafeAreaView } from 'react-native';
import { Method } from 'axios';

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ViewProps = ThemeProps & View['props'];
export type SafeAreaViewProps = ThemeProps & SafeAreaView['props'];

type Fonts =
  | 'black'
  | 'bold'
  | 'extra-bold'
  | 'extra-light'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semi-bold';

export type TextProps = ThemeProps & Text['props'] & { font?: Fonts };

export type Headers = {
  'Content-Type': string;
  'Access-Control-Allow-Origin': string;
  'Cache-Control': string;
  Pragma: string;
};

export type Options = {
  data?: object;
  method?: Method;
  headers?: object;
  params?: object;
};
