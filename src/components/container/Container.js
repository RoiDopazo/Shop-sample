import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './ContainerStyles';

const Container = ({ children, title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
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
