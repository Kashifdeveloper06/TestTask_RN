import React, { useState } from 'react';
import { Text, View, TextInput, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from './styles';
import * as Icon from 'react-native-feather';
import { colors } from '../../utils/colors';
import { BannerCard, ProductList, addToCartProducts } from '../../utils/StaticData';
import { Icons } from '../../assets';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {

  const [products, setProducts] = useState(addToCartProducts);
  const navigation = useNavigation();

  const decrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 0 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  const incrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
    );
  };

  return (
    <View style={styles.mainContainer}>

      {/* Top Bar */}
      <View style={styles.topMenu}>
        <TouchableOpacity style={styles.backIcon}
        onPress={() => navigation.goBack()}>
          <Image source={Icons.back} style={styles.Icon} />
        </TouchableOpacity>
        <Text style={styles.itemTop}>{`Shopping Cart (5)`}</Text>
      </View>

      <ScrollView>

        {/* Add To Cart Products */}
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                // <View>
                  <View style={styles.flatlistContainer}>

                    <View style={styles.productContainer}>
                      <Image source={item.image} style={styles.productImage} />
                      <View style={{ marginLeft: 20 }}>
                        <Text style={styles.productName}>{item.productName}</Text>
                        <Text style={styles.productName}>{item.price}</Text>
                      </View>
                    </View>

                    <View style={styles.totalProduct}>
                      <TouchableOpacity style={styles.increment}
                        onPress={() => decrementQuantity(item.id)}>
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={{ paddingHorizontal: 10 }}>{item.quantity}</Text>
                      <TouchableOpacity style={styles.increment}
                        onPress={() => incrementQuantity(item.id)}>
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                // <View style={{ height: 0.2, backgroundColor: '#000' }} />
                // </View> 
              )
            }}
          />
        </View>

        <TouchableOpacity style={styles.editText}><Text style={styles.txt}>{`Edit`}</Text></TouchableOpacity>

        {/* SubTotal */}
        <View style={styles.subTotalContainer}>

          <View style={styles.subTotalText}>
            <Text>{`SubTotal`}</Text>
            <Text>{`$35.96`}</Text>
          </View>

          <View style={styles.subTotalText}>
            <Text>{`Delivery`}</Text>
            <Text>{`$2.00`}</Text>
          </View>

          <View style={styles.subTotalText}>
            <Text>{`Total`}</Text>
            <Text>{`$32.96`}</Text>
          </View>

          <TouchableOpacity style={styles.bottomButton}>
            <Text style={styles.buttonText} >Proceed  To checkout</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>
  )
}

export default CartScreen;