import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: theme.palette.primary.veryLight,
  },
});

const Separator = () => {
  return <View style={styles.separator}></View>;
};

export default Separator;
