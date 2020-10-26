import { useState, useCallback } from 'react';
import { produce } from 'immer';
import SpoonacularService from '../services/SpoonacularService';
import formatMessage from 'format-message';

const initialState = {
  categories: [],
  items: [],
  error: null,
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

  const setError = (error) => {
    setState(
      produce((draft) => {
        draft.error = error;
      }),
    );
  };

  const getCategories = useCallback(async () => {
    const categories = await SpoonacularService.getCuisines();
    setCategories(categories);
  }, []);

  const getItemsByCategory = useCallback(async (category) => {
    try {
      const data = await SpoonacularService.searchRecipes({ category });
      setItems(data.results);
    } catch  (err) {
      setError(formatMessage('No se pudieron obtener los productos'));
    }
  }, []);

  return {
    ProductsState: state,
    ProductsMutations: { setCategories, setItems },
    ProductsEffects: { getCategories, getItemsByCategory },
  };
};

export default ProductsStore;
