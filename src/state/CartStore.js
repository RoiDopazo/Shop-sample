import { useState } from 'react';
import { produce } from 'immer';

const initialState = {
  items: [],
};

const CartStore = (initialPropStates) => {
  const [state, setState] = useState(initialPropStates || initialState);

  const addItem = (item) => {
    setState((baseState) =>
      produce(baseState, (draft) => {
        const findIndex = draft.items.findIndex((el) => el.id === item.id);
        if (findIndex !== -1) {
          const count = draft.items[findIndex].count;
          draft.items[findIndex] = { ...item, count: count + 1 };
        } else {
          draft.items.push({ ...item, count: 1 });
        }
      }),
    );
  };

  return {
    CartState: state,
    CartMutations: { addItem },
    CartEffects: {},
  };
};

export default CartStore;
