import { act, renderHook } from '@testing-library/react-hooks';
import CartStore from '../CartStore';

describe('CartStore - mutations', () => {
  describe('addItem', () => {
    test('should add one item into the collection', async () => {
      // arrange

      let store;
      renderHook(() => (store = CartStore()));

      // act
      expect.assertions(2);
      act(() => {
        store.CartMutations.addItem({ id: 1000 });
      });

      expect(store.CartState.items).toHaveLength(1);
      expect(store.CartState.items[0].count).toEqual(1);
    });

    test('should update the count if item is already added', async () => {
      // arrange

      let store;
      renderHook(
        () =>
          (store = CartStore({
            items: [{ id: 2000, count: 1 }],
          })),
      );

      // act
      expect.assertions(2);
      act(() => {
        store.CartMutations.addItem({ id: 2000 });
      });

      expect(store.CartState.items).toHaveLength(1);
      expect(store.CartState.items[0].count).toEqual(2);
    });
  });
});
