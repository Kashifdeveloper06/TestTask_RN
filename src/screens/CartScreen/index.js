import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icons} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {useCart} from '../../components/context/CartContext';
import Counter from '../../components/common/Counter';

const CartScreen = () => {
  const {cart} = useCart();
  const navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState(
    cart.map((item, index) => ({id: index.toString(), quantity: 1})),
  );

  useEffect(() => {
    calculateTotalPrice();
  }, [quantities, cart]);

  const calculateTotalPrice = () => {
    const newTotalPrice = cart.reduce((total, item, index) => {
      const currentQuantity =
        quantities.find(q => q.id === index.toString())?.quantity || 1;
      return total + item.price * currentQuantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  };

  const handleCountChange = (id, newCount) => {
    setQuantities(prevQuantities =>
      prevQuantities.map(quantity =>
        quantity.id === id ? {...quantity, quantity: newCount} : quantity,
      ),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topMenu}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Image source={Icons.back} style={styles.Icon} />
        </TouchableOpacity>
        <Text style={styles.itemTop}>{`Shopping Cart (${cart.length})`}</Text>
      </View>

      <View style={{height: '60%'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            const currentQuantity =
              quantities.find(q => q.id === index.toString())?.quantity || 1;
            return (
              <View style={styles.flatlistContainer}>
                <View style={styles.productContainer}>
                  <Image
                    source={{uri: item.thumbnail}}
                    style={styles.productImage}
                  />
                  <View style={{marginLeft: 20}}>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={[
                        {width: 130},
                        styles.productName,
                      ]}>{`${item.title}`}</Text>
                    <Text style={styles.productName}>{`$${
                      item.price * currentQuantity
                    }`}</Text>
                  </View>
                </View>
                <Counter
                  initialValue={currentQuantity}
                  onIncrement={newCount =>
                    handleCountChange(index.toString(), newCount)
                  }
                  onDecrement={newCount =>
                    handleCountChange(index.toString(), newCount)
                  }
                />
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity style={styles.editText}>
        <Text style={styles.txt}>{`Edit`}</Text>
      </TouchableOpacity>

      <View style={styles.subTotalContainer}>
        <View style={styles.subTotalText}>
          <Text>{`SubTotal`}</Text>
          <Text>{`$${totalPrice}`}</Text>
        </View>

        <View style={styles.subTotalText}>
          <Text>{`Delivery`}</Text>
          <Text>{`$${cart.length}`}</Text>
        </View>

        <View style={styles.subTotalText}>
          <Text>{`Total`}</Text>
          <Text>{`$${totalPrice * cart.length}`}</Text>
        </View>

        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.buttonText}>{`Proceed  To checkout`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
