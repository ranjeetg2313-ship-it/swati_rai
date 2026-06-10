import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Tyre {
  brand: string;
  name: string;
  price: string;
  oldPrice: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  discount: string;
  tag: string;
  sizes: string[];
}

export interface CartItem {
  id: string; // unique string: brand-name-size
  brand: string;
  name: string;
  price: number; // raw numeric price for calculations
  priceStr: string; // formatted string price (e.g. "9,499")
  oldPriceStr?: string;
  image: string;
  quantity: number;
  size: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Tyre[];
  addToCart: (tyre: Tyre, size?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  toggleWishlist: (tyre: Tyre) => void;
  clearCart: () => void;
}

const parsePrice = (priceStr: string): number => {
  return parseInt(priceStr.replace(/,/g, ""), 10) || 0;
};

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],

      addToCart: (tyre, size) => {
        const selectedSize = size || tyre.sizes[0] || "205/55 R16";
        const itemId = `${tyre.brand}-${tyre.name}-${selectedSize}`
          .toLowerCase()
          .replace(/\s+/g, "-");

        set((state) => {
          const existingIndex = state.cart.findIndex((item) => item.id === itemId);
          if (existingIndex > -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingIndex].quantity += 1;
            return { cart: updatedCart };
          }

          const newItem: CartItem = {
            id: itemId,
            brand: tyre.brand,
            name: tyre.name,
            price: parsePrice(tyre.price),
            priceStr: tyre.price,
            oldPriceStr: tyre.oldPrice,
            image: tyre.image,
            quantity: 1,
            size: selectedSize,
          };
          return { cart: [...state.cart, newItem] };
        });
      },

      removeFromCart: (itemId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        }));
      },

      toggleWishlist: (tyre) => {
        set((state) => {
          const isFavorited = state.wishlist.some(
            (item) =>
              item.brand.toLowerCase() === tyre.brand.toLowerCase() &&
              item.name.toLowerCase() === tyre.name.toLowerCase()
          );

          if (isFavorited) {
            return {
              wishlist: state.wishlist.filter(
                (item) =>
                  !(
                    item.brand.toLowerCase() === tyre.brand.toLowerCase() &&
                    item.name.toLowerCase() === tyre.name.toLowerCase()
                  )
              ),
            };
          } else {
            return { wishlist: [...state.wishlist, tyre] };
          }
        });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "treadx-store", // local storage key
    }
  )
);
