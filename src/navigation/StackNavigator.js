import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import CustomBottomNavigator from './CustomBottomNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: route.name === 'Home', // Show the tab bar only for HomeScreen
                headerShown: false,
            })}
            tabBar={(props) => <CustomBottomNavigator {...props} />}
        >
            <Tab.Screen name="Home" component={StackNavigator} />
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigation;

const styles = StyleSheet.create({})