/* eslint-disable filenames/match-regex */
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams;
  Modal: undefined;
  NotFound: undefined;
};

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}
