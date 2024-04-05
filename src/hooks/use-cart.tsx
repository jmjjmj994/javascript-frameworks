import { create } from 'zustand';
type Item = {
  id: string;
  amount: number;
  image: {
    url: string;
  };
  title: string;
  discountedPrice: number;
  price: number;
};

type CartStore = {
  items: Item[];
  addItem: (item: Item) => void;
  incrementItem: (itemId: string) => void;
  decrementItem: (itemId: string) => void;
  removeItem: () => void;
};

const useCart= create<CartStore>((set) => ({
  items: JSON.parse(localStorage.getItem('cartItems') || '[]') as Item[],
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (existingItem) => existingItem.id === item.id
      );
      if (existingItem) {
        const updatedItems = state.items.map((existingItem) => {
          if (existingItem.id === item.id) {
            return { ...existingItem, amount: existingItem.amount + 1 };
          }
          return existingItem;
        });
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return { items: updatedItems };
      } else {
        const updatedItems = [...state.items, { ...item, amount: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return { items: updatedItems };
      }
    }),

  removeItem: () =>
    set(() => {
      localStorage.removeItem('cartItems');
      return { items: [] };
    }),

  incrementItem: (itemId: string) => {
    set((state) => {
      const incrementedItems = state.items.map((item) => {
        if (item.id === itemId) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      localStorage.setItem('cartItems', JSON.stringify(incrementedItems));
      return { items: incrementedItems };
    });
  },
  decrementItem: (itemId: string) => {
    set((state) => {
      const decrementedItems = state.items
        .map((item) => {
          if (item.id === itemId) {
            if (item.amount === 1) {
              return undefined;
            } else {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item): item is Item => item !== undefined);
      localStorage.setItem('cartItems', JSON.stringify(decrementedItems));
      return { items: decrementedItems };
    });
  },
}));

export default useCart;
