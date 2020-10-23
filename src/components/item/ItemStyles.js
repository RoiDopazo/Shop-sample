import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 12,
    height: 100,
  },
  innerContainer: {
    padding: 12,
    alignItems: 'flex-start',
    flex: 1,
  },
  actionContainer: {
    width: 80,
  },
  image: {
    width: 100,
    height: 100,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: theme.palette.accent.action,
  },
});

export default styles;
