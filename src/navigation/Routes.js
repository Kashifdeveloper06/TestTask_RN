import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CartProvider} from '../components/context/CartContext';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './Navigator';

const Routes = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </CartProvider>
  );
};

export default Routes;

const styles = StyleSheet.create({});
