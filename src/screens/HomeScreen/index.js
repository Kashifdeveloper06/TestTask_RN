import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import * as Icon from 'react-native-feather';
import { colors } from '../../utils/colors';
import { BannerCard } from '../../utils/StaticData';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';
import axios from 'axios';
import DiscountCard from '../../components/cards/DiscountCard';
import ProductCard from '../../components/cards/ProductCard';

const HomeScreen = () => {

  const navigation = useNavigation();
  const [data, setData] = useState()

  useEffect(() => {
    getData()
  }, [])


  const getData = async () => {
    await axios.get('https://dummyjson.com/products')
      .then(response => {
        setData(response.data.products)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <View style={styles.nameBar}>
          <Text style={styles.userName}>{`Hey, Rahul`}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}>
            <Text style={{ backgroundColor: '#F9B023', textAlign: 'center', borderRadius: 20, width: 20, height: 20, zIndex: 5, position: 'absolute', bottom: 10, left: 5 }}>
              {`3`}
            </Text>
            <Image source={Icons.bag} style={styles.bagIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.SearchBar}>
          <Icon.Search stroke={'white'} />
          <TextInput
            placeholder='Search Products or store'
            placeholderTextColor={colors.Grey}
            style={{ marginLeft: 10 }}
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
            renderItem={({ item }) => {
              return (<DiscountCard item={item} />)
            }}
          />
        </View>

        <View style={styles.RecommandTextCon}>
          <Text style={styles.RecommandText}>{`Recommended`}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={({ item }) => {
              return (<ProductCard item={item} />)
            }}
          />
        </View>
      </ScrollView>

      <View style={{ height: 40 }} />
    </View>
  )
}

export default HomeScreen;