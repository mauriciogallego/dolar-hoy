import { Text as DefaultText } from 'react-native';
import { TextProps } from '../../@types';
import { useThemeColor } from '../../hooks/Themed';

const getFont = (font: string | undefined) => {
  let fontFamily;
  switch (font) {
    case 'black': {
      fontFamily = 'Poppins-Black';
      break;
    }
    case 'bold': {
      fontFamily = 'Poppins-Bold';
      break;
    }
    case 'extra-bold': {
      fontFamily = 'Poppins-ExtraBold';
      break;
    }
    case 'extra-light': {
      fontFamily = 'Poppins-ExtraLight';
      break;
    }
    case 'light': {
      fontFamily = 'Poppins-Light';
      break;
    }
    case 'medium': {
      fontFamily = 'Poppins-Medium';
      break;
    }
    case 'regular': {
      fontFamily = 'Poppins-Regular';
      break;
    }
    case 'semi-bold': {
      fontFamily = 'Poppins-SemiBold';
      break;
    }
    default: {
      fontFamily = 'Poppins-Regular';
    }
  }
  return fontFamily;
};

export default function Text(props: TextProps) {
  const {
    style,
    lightColor,
    darkColor,
    font = 'regular',
    ...otherProps
  } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <DefaultText
      {...otherProps}
      style={[style, { color, fontFamily: getFont(font) }]}
    />
  );
}
