import { StyleSheet } from 'react-native';
import theme from '../../theme';

export default () =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.palette.accent.main,
      flex: 1,
    },
    header: {
      marginTop: 8,
      padding: 16,
    },
    headerText: {
      fontSize: 24,
      fontWeight: '500',
    },
  });
