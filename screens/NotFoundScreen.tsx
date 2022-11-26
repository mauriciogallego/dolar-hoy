import { StyleSheet, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { NotificationStackScreenProps } from '../types';
import View from '../components/view/View';
import Text from '../components/text/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const NotFoundScreen: FC<NotificationStackScreenProps<'NotFound'>> = ({
  navigation,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>This screen do not exist.</Text>
    <TouchableOpacity
      onPress={() => navigation.replace('Root')}
      style={styles.link}
    >
      <Text style={styles.linkText}>Go to home screen!</Text>
    </TouchableOpacity>
  </View>
);

export default NotFoundScreen;
