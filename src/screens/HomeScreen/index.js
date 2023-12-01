import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import * as Icon from 'react-native-feather';
import {colors} from '../../utils/colors';
import {BannerCard} from '../../utils/StaticData';
import {Icons} from '../../assets';
import axios from 'axios';
import DiscountCard from '../../components/cards/DiscountCard';
import ProductCard from '../../components/cards/ProductCard';
import {useCart} from '../../components/context/CartContext';

const HomeScreen = ({navigation}) => {
  const {cart} = useCart();
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get('https://dummyjson.com/products')
      .then(response => {
        setData(response.data.products);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <View style={styles.nameBar}>
          <Text style={styles.userName}>{`Hey, Rahul`}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.notification}>{`${cart.length}`}</Text>
            <Image source={Icons.bag} style={styles.bagIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.SearchBar}>
          <Icon.Search stroke={'white'} />
          <TextInput
            placeholder="Search Products or store"
            placeholderTextColor={colors.Grey}
            style={{marginLeft: 10, color: colors.White}}
          />
        </View>

        <View style={styles.dilveryContainer}>
          <View>
            <Text style={styles.dilveryTxtTop}>{`DELIVERY TO`}</Text>
            <View style={styles.dilveryTxtBotton}>
              <Text style={styles.dilveryTxt}>{`Green Way 3000, Sylhet`}</Text>
              <Icon.ChevronDown stroke={'white'} width={15} height={15} />
            </View>
          </View>

          <View>
            <Text style={styles.dilveryTxtTop}>{`WITHIN`}</Text>
            <View style={styles.dilveryTxtBotton}>
              <Text style={styles.dilveryTxt}>{`1 Hour`}</Text>
              <Icon.ChevronDown stroke={'white'} width={15} height={15} />
            </View>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.bannerView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={BannerCard}
            renderItem={({item}) => {
              return <DiscountCard item={item} />;
            }}
          />
        </View>

        <View style={styles.RecommandTextCon}>
          <Text style={styles.RecommandText}>{`Recommended`}</Text>
        </View>
        <View style={{margin: 10}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={({item}) => {
              return <ProductCard item={item} />;
            }}
          />
        </View>
      </ScrollView>

      <View style={{height: 80}} />
    </View>
  );
};

export default HomeScreen;
