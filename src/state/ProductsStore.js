import { useState, useCallback } from 'react';
import { produce } from 'immer';
import SpoonacularService from '../services/SpoonacularService';

const initialState = {
  categories: [],
  items: [],
};

const ProductsStore = () => {
  const [state, setState] = useState(initialState);

  const setCategories = (categories) => {
    setState(
      produce((draft) => {
        draft.categories = categories;
      }),
    );
  };

  const setItems = (items) => {
    setState(
      produce((draft) => {
        draft.items = items;
      }),
    );
  };

  const getCategories = useCallback(async () => {
    const categories = await SpoonacularService.getCuisines();
    setCategories(categories);
  }, []);

  const getItemsByCategory = useCallback(async (category) => {
    const data = await SpoonacularService.searchRecipes({ category });
    console.log(JSON.stringify(data));
    setItems(data.results);
  }, []);

  return {
    ProductsState: state,
    ProductsMutations: { setCategories, setItems },
    ProductsEffects: { getCategories, getItemsByCategory },
  };
};

export default ProductsStore;
