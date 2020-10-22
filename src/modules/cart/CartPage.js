import React from 'react';
import { Text, View } from 'react-native';
import Container from '../../components/container/Container';
import styles from './CartPageStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import formatMessage from 'format-message';

const CartPage = () => {
  return (
    <Container title={formatMessage('Cesta de la compra')}>
      <Icon style={styles.icon_bg} name={'cart-outline'} size={300} />
      <View style={styles.container}>
        <Text>{formatMessage("Tu cesta está vacia")}</Text>
      </View>
    </Container>
  );
};

export default CartPage;
