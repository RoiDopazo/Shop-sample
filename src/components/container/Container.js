import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../typography';
import { SafeAreaView, View } from 'react-native';
import styles from './ContainerStyles';

const Container = ({ children, title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Typography type="h3" weight="bold">
          {title}
        </Typography>
      </View>
      {children}
    </SafeAreaView>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Container.defaultProps = {
  title: '',
};

export default Container;
