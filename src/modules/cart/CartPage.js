import React from 'react';
import { Text, View } from 'react-native';
import Container from '../../components/container/Container';
import useStyles from './CartPageStyles';
import { Icon } from 'react-native-paper/lib/typescript/src/components/Avatar/Avatar';

const CartPage = () => {
  const styles = useStyles();

  return (
    <Container title={'Cesta de la compra'}>
      <Icon />
      <View style={styles.container}>
        <Text>Tu cesta está vacia</Text>
      </View>
    </Container>
  );
};

export default CartPage;
