import React from 'react';
import { View } from 'react-native';
import Container from '../../components/container/Container';
import styles from './CartPageStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import formatMessage from 'format-message';
import Typography from '../../components/typography';
import { useStore } from 'outstated';
import CartStore from '../../state/CartStore';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Item from '../../components/item/Item';
import Separator from '../../components/separator/Separator';

const CartPage = () => {
  const {
    CartState: { items },
  } = useStore(CartStore);

  return (
    <Container title={formatMessage('Cesta de la compra')}>
      <Icon style={styles.icon_bg} name={'cart-outline'} size={300} />
      {items && items.length === 0 ? (
        <View style={styles.container}>
          <Typography type="p2">{formatMessage('Tu cesta está vacia')}</Typography>
        </View>
      ) : (
        <View style={styles.content}>
        <View style={styles.buttonContainer}>

          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Typography style={styles.textButton} type="p1">
              {formatMessage('Realizar Pedido')}
            </Typography>
          </TouchableOpacity>
        </View>


          <FlatList
            style={styles.list}
            data={items}
            renderItem={({ item }) => (
              <Item
                photoUrl={item.image}
                name={item.title}
                rightComponent={
                  <View style={styles.countContainer}>
                    <View style={styles.countItem}>
                      <Typography type="p2" light weight="bold">
                        {item.count}
                      </Typography>
                    </View>
                  </View>
                }
              />
            )}
            ItemSeparatorComponent={Separator}
          />
                    
        </View>
      )}
    </Container>
  );
};

export default CartPage;
