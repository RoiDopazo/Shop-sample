import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Typography from '../typography';
import styles from './CategoryCardStyles';

const CategoryCard = ({ item, index, onPress }) => {
  return (
    <TouchableOpacity style={styles.card(index)} onPress={() => onPress(item)}>
      <View>
        <Typography type="h5" uppercase weight="bold">
          {item.name}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

CategoryCard.propTypes = {
  item: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

CategoryCard.defaultProps = {
  onPress: () => {},
};

export default CategoryCard;
