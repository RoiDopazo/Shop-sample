import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_bg: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    opacity: 0.03,
    color: theme.palette.primary.main,
    transform: [{ translateX: -150 }, { translateY: -50 }],
  },
});

export default styles;
