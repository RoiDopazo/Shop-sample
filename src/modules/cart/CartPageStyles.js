import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon_bg: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    opacity: 0.03,
    color: theme.palette.primary.main,
    transform: [{ translateX: -150 }, { translateY: -50 }],
  },
  buttonContainer: {
    margin: 12,
    height: 60,
  },
  content: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  button: {
    padding: 16,
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textButton: {
    color: theme.palette.accent.main,
  },
  countContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
  },
  countItem: {
    height: 32,
    width: 32,
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.accent.main,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    alignSelf: 'center',
  },
});

export default styles;
