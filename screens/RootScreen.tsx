import { StyleSheet } from 'react-native';
import { FC } from 'react';
import View from '../components/view/View';
import Text from '../components/text/Text';
import { NotificationStackScreenProps } from '../types';
import usePrice from '../hooks/queries/usePrice';
import SafeAreaView from '../components/safe-area-view/SafeAreaView';
import Separator from '../components/separator/Separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  priceTitle: {
    fontSize: 20,
  },
  price: {
    fontSize: 15,
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
  },
  section: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const RootScreen: FC<NotificationStackScreenProps<'Root'>> = () => {
  const { data } = usePrice();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text font="bold" style={styles.title}>
          Dólar hoy
        </Text>
        <Separator />
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text font="bold" style={styles.priceTitle}>
            Compra
          </Text>
          <Text style={styles.price}>{data?.compra}</Text>
        </View>
        <View style={styles.section}>
          <Text font="bold" style={styles.priceTitle}>
            Venta
          </Text>
          <Text style={styles.price}>{data?.venta}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RootScreen;
