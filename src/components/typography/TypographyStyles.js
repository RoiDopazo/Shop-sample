import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.palette.primary.main,
  },
  lightMode: {
    color: '#FFFFFF',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: 48,
    lineHeight: 48,
  },
  h2: {
    fontSize: 32,
    lineHeight: 36,
  },
  h3: {
    fontSize: 24,
    lineHeight: 28,
  },
  h4: {
    fontSize: 20,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  p1: {
    fontSize: 18,
    lineHeight: 28,
  },
  p2: {
    fontSize: 16,
    lineHeight: 24,
  },
  p3: {
    fontSize: 14,
    lineHeight: 17,
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
});

export default styles;
