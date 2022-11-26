import { View as DefaultView } from 'react-native';
import { ViewProps } from '../../@types';
import { useThemeColor } from '../../hooks/Themed';

export default function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
