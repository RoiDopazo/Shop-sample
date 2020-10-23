import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.accent.main,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: 8,
    padding: 16,
  },
});

export default styles;
