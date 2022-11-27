/* eslint-disable filenames/match-regex */
import { Text, View } from 'react-native';
import { Method } from 'axios';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ViewProps = ThemeProps & View['props'];
export type TextProps = ThemeProps & Text['props'];

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
