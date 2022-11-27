import { StyleSheet } from 'react-native';
import { FC } from 'react';
import View from '../components/view/View';
import Text from '../components/text/Text';
import { NotificationStackScreenProps } from '../types';
import usePrice from '../hooks/queries/usePrice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const RootScreen: FC<NotificationStackScreenProps<'Root'>> = () => {
  const { data } = usePrice();
  console.log({ data });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

export default RootScreen;
