import { StyleSheet } from 'react-native';
import { textStyles, colors } from '../../config/styles';

const { H3 } = textStyles;
const { lilac } = colors;

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 10
  },
  profileTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10
  },
  profileText: {
    fontSize: H3.fontSize,
    color: lilac,
    paddingLeft: 10
  }
});
