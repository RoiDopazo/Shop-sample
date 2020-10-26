import MockAdapter from 'axios-mock-adapter';
import { act, renderHook } from '@testing-library/react-hooks';
import AxiosInstance from '../../services/AxiosInstance';
import ProductsStore from '../ProductsStore';

describe('ProductsStore - effects', () => {
  const axiosMock = new MockAdapter(AxiosInstance);

  beforeEach(() => {
    axiosMock.reset();
  });

  describe('getCategories', () => {
    test('should get categories and add them to state', async () => {
      // arrange

      // TODO: No needed axios mock because categories are mocked for now
      let store;
      renderHook(() => (store = ProductsStore()));

      // act
      expect.assertions(1);
      act(() => {
        store.ProductsEffects.getCategories({}).then(() => {
          expect(store.ProductsState.categories).not.toHaveLength(0);
        });
      });
    });

    test('should get items and add them to state', async () => {
      // arrange
      axiosMock.onGet('/recipes/complexSearch').reply(200, { results: [{ id: 1000 }] });
      let store;
      renderHook(() => (store = ProductsStore()));

      // act
      expect.assertions(2);
      act(() => {
        store.ProductsEffects.getItemsByCategory('category').then(() => {
          expect(store.ProductsState.items).toHaveLength(1);
          expect(store.ProductsState.items[0].id).toEqual(1000);
        });
      });
    });

    test('should setError if request fails', async () => {
      // arrange
      axiosMock.onGet('/recipes/complexSearch').reply(500, {});
      let store;
      renderHook(() => (store = ProductsStore()));

      // act
      expect.assertions(2);
      act(() => {
        store.ProductsEffects.getItemsByCategory('category').then(() => {
          expect(store.ProductsState.items).toHaveLength(0);
          expect(store.ProductsState.error).not.toBeNull();
        });
      });
    });
  });
});
