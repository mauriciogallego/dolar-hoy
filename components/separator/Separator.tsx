import { StyleSheet, View } from 'react-native';
import { ThemeProps } from '../../@types';
import { useThemeColor } from '../../hooks/Themed';

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    opacity: 0.5,
  },
});

const Separator = (props: ThemeProps) => {
  const { lightColor, darkColor } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <View style={[styles.container, { backgroundColor: color }]} />;
};

export default Separator;
