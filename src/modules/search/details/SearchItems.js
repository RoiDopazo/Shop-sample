import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStore } from 'outstated';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Item from '../../../components/item/Item';
import styles from './SearchItemsStyles';
import ProductsStore from '../../../state/ProductsStore';
import Separator from '../../../components/separator/Separator';
import CartStore from '../../../state/CartStore';

const SearchItems = ({ route }) => {
  const navigation = useNavigation();

  const {
    ProductsState: { items },
    ProductsEffects,
  } = useStore(ProductsStore);

  const { CartMutations } = useStore(CartStore);

  useEffect(() => {
    navigation.setOptions({ headerTitle: route.params.item.name });
    ProductsEffects.getItemsByCategory({ category: route.params.item.name });
  }, [route]);

  const handleOnAddToCard = useCallback((item) => {
    CartMutations.addItem(item);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Item photoUrl={item.image} name={item.title} onPress={() => handleOnAddToCard(item)} />
        )}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};

SearchItems.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      item: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default SearchItems;
