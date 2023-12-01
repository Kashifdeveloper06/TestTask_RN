import React, {createContext, useReducer, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];

    case 'SET_CART':
      return action.payload;

    default:
      return state;
  }
};

const CartProvider = ({children}) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const loadCartData = async () => {
      try {
        const storedCart = await AsyncStorage.getItem('cart');
        if (storedCart) {
          dispatch({type: 'SET_CART', payload: JSON.parse(storedCart)});
        }
      } catch (error) {
        console.error('Error loading cart data:', error);
      }
    };

    loadCartData();
  }, []);

  useEffect(() => {
    const saveCartData = async () => {
      try {
        await AsyncStorage.setItem('cart', JSON.stringify(cart));
      } catch (error) {
        console.error('Error saving cart data:', error);
      }
    };

    saveCartData();
  }, [cart]);

  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export {CartProvider, useCart};
