import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../theme';

const colors = ['#08c9a3', '#f09f26', '#c90675', '#539965', '#ab7e78'];

const styles = StyleSheet.create({
  card: (index) => ({
    width: Dimensions.get('window').width / 2 - 16,
    margin: 4,
    backgroundColor: colors[index % colors.length],
    height: 200,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.palette.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});

export default styles;
