import { StyleSheet, FlatList } from 'react-native';
import { FC } from 'react';
import View from '../components/view/View';
import Text from '../components/text/Text';
import { NotificationStackScreenProps } from '../types';
import usePrice from '../hooks/queries/usePrice';
import SafeAreaView from '../components/safe-area-view/SafeAreaView';
import Separator from '../components/separator/Separator';
import { Trade } from '../@types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  priceTitle: {
    fontSize: 25,
  },
  price: {
    marginVertical: 5,
    fontSize: 20,
  },
  title: {
    marginVertical: 20,
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const Item = ({ item }: { item: Trade }) => (
  <View style={styles.section}>
    <Text font="regular" style={styles.priceTitle}>
      {item.title === 'Dólar hoy' ? 'Dólar oficial' : item.title}
    </Text>
    <View style={styles.item}>
      <View style={styles.section}>
        <Text font="bold" style={styles.priceTitle}>
          Compra
        </Text>
        <Text style={styles.price}>{item.compra}</Text>
      </View>
      <View style={styles.section}>
        <Text font="bold" style={styles.priceTitle}>
          Venta
        </Text>
        <Text style={styles.price}>{item.venta}</Text>
      </View>
    </View>
  </View>
);

const RootScreen: FC<NotificationStackScreenProps<'Root'>> = () => {
  const { data, refetch, isRefetching } = usePrice();
  if (data) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text font="bold" style={styles.title}>
            Dólar hoy
          </Text>
          <Separator />
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={(item, index) => `${item.title.toString()} ${index}`}
            onRefresh={refetch}
            refreshing={isRefetching}
            onEndReachedThreshold={0}
            ItemSeparatorComponent={() => <Separator />}
          />
        </View>
      </SafeAreaView>
    );
  }
  return null;
};

export default RootScreen;
