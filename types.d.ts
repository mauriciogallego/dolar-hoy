/* eslint-disable filenames/match-regex */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams;
  Modal: undefined;
  NotFound: NavigatorScreenParams;
};

export type NotificationStackScreenProps<
  Screen extends keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, Screen>;

declare global {
  namespace ReactNavigation {
    type RootParamList = NotificationStackScreenProps;
  }
}
