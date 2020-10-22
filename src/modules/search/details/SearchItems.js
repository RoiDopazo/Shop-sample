import { useStore } from 'outstated';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import ProductsStore from '../../../state/ProductsStore';

const SearchItems = ({ route }) => {
  console.log(route);

  const { ProductsState, ProductsEffects } = useStore(ProductsStore);


  useEffect(() => {
    ProductsEffects.getItemsByCategory({ category: route.params.item.name });
  }, [route]);

  return <Text>asdas</Text>;
};

export default SearchItems;
