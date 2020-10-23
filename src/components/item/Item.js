import formatMessage from 'format-message';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Typography from '../typography';
import styles from './ItemStyles';

const Item = ({ photoUrl, name, onPress, rightComponent }) => {
  return (
    <View style={styles.container}>
      <FastImage style={styles.image} source={{ uri: photoUrl }} resizeMode="cover"></FastImage>
      <View style={styles.innerContainer}>
        <View style={styles.nameContainer}>
          <Typography style={styles.name} maxLines={2} type="h4">
            {name}
          </Typography>
        </View>
        {onPress && (
          <TouchableOpacity style={styles.subtitleContainer} onPress={onPress}>
            <Icon style={styles.subtitle} name="plus" size={24} />
            <Typography type="p3" style={styles.subtitle}>
              {formatMessage('Añadir al carrito')}
            </Typography>
          </TouchableOpacity>
        )}
      </View>
      {rightComponent}
    </View>
  );
};

Item.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  rightComponent: PropTypes.func,
};

Item.defaultProps = {
  onPress: undefined,
  rightComponent: undefined,
};

export default Item;
