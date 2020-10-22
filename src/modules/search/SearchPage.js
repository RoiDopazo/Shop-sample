import React, { useCallback, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useStore } from 'outstated';
import formatMessage from 'format-message';
import Container from '../../components/container';
import { CategoryCard } from '../../components/cards';
import styles from './SearchPageStyles';
import ProductsStore from '../../state/ProductsStore';
import ROUTES from '../../app/routes';

const SearchPage = () => {
  const navigation = useNavigation();

  const { ProductsState, ProductsEffects } = useStore(ProductsStore);

  useEffect(() => {
    ProductsEffects.getCategories();
  }, []);

  const handleOnPressItem = useCallback(
    (item) => {
      navigation.navigate(ROUTES.SearchItems, {
        item,
      });
    },
    [navigation],
  );

  return (
    <Container title={formatMessage('Tienda')}>
      <ScrollView contentContainerStyle={styles.center}>
        <View style={styles.cardContainer}>
          {ProductsState.categories &&
            ProductsState.categories.map((cat, index) => (
              <CategoryCard key={cat.name} item={cat} index={index} onPress={handleOnPressItem} />
            ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default SearchPage;
