import React, { useCallback } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TypographyStyles';

const Typography = ({ type, light, uppercase, align, weight, style, children, maxLines }) => {
  const getStyles = useCallback(() => {
    const stylesArray = [styles.text];
    if (light) {
      stylesArray.push(styles.lightMode);
    }
    if (uppercase) {
      stylesArray.push(styles.uppercase);
    }
    const typeAct = type && styles[type.toLowerCase()];
    if (typeAct) {
      stylesArray.push(typeAct);
    }
    const weightAct = weight && styles[weight.toLowerCase()];
    if (weightAct) {
      stylesArray.push(weightAct);
    }
    const alignAct = align && styles[align.toLowerCase()];
    if (alignAct) {
      stylesArray.push(alignAct);
    }
    return stylesArray;
  }, [type, light, uppercase, weight, align]);

  return (
    <Text style={getStyles().concat([style])} numberOfLines={maxLines} ellipsizeMode={maxLines ? 'tail' : undefined}>
      {children}
    </Text>
  );
};

Typography.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  uppercase: PropTypes.bool,
  light: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  weight: PropTypes.string,
  align: PropTypes.string,
  maxLines: PropTypes.number,
};

Typography.defaultProps = {
  style: {},
  uppercase: false,
  light: false,
  weight: undefined,
  align: 'left',
  maxLines: undefined,
};

export default Typography;
