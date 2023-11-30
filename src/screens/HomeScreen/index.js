import React from 'react';
import { Text, View, TextInput, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from './styles';
import * as Icon from 'react-native-feather';
import { colors } from '../../utils/colors';
import { BannerCard, ProductList } from '../../utils/StaticData';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>

      {/* Top Header Menu */}
      <View style={styles.topView}>

        {/* Top User Bar */}
        <View style={styles.nameBar}>
          <Text style={styles.userName}>Hey, Rahul</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Text style={{backgroundColor: '#F9B023', textAlign: 'center', borderRadius: 20, width: 20, height: 20, zIndex: 5, position: 'absolute', bottom: 10, left: 5}}>{`3`}</Text>
            <Image source={Icons.bag} style={styles.bagIcon} />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.SearchBar}>
          <Icon.Search stroke={'white'} />
          <TextInput placeholder='Search Products or store' placeholderTextColor={colors.grey} style={{ marginLeft: 10 }} />
        </View>

        {/* Delivery Container */}
        <View style={styles.dilveryContainer}>

          <View>
            <Text style={styles.dilveryTxtTop}>DELIVERY TO</Text>
            <View style={styles.dilveryTxtBotton}>
              <Text style={styles.dilveryTxt}>Green Way 3000, Sylhet</Text>
              <Icon.ChevronDown stroke={'white'} width={15} height={15} />
            </View>
          </View>

          <View>
            <Text style={styles.dilveryTxtTop}>WITHIN</Text>
            <View style={styles.dilveryTxtBotton}>
              <Text style={styles.dilveryTxt}>1 Hour</Text>
              <Icon.ChevronDown stroke={'white'} width={15} height={15} />
            </View>
          </View>

        </View>
      </View>

      {/* Banner Cards */}

      <ScrollView>

        <View style={styles.bannerView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={BannerCard}
            renderItem={({ item }) => {
              return (
                <View style={styles.bannerContainer}>
                  <View style={styles.bannerMainContainer}>
                    <Image source={item.image} style={styles.BannerImage}></Image>
                    <View>
                      <Text style={styles.bannerText}>{item.text}</Text>
                      <Text style={[styles.bannerText, { fontWeight: '800' }]}>{item.offtext}</Text>
                      <Text style={{ color: 'white' }}>{item.orderText}</Text>
                    </View>
                  </View>
                </View>
              )
            }}
          />
        </View>

        {/* Recommended */}

        <View style={styles.RecommandTextCon}>
          <Text style={styles.RecommandText}>Recommended</Text>
        </View>

        <FlatList
          // horizontal
          showsVerticalScrollIndicator={false}
          data={ProductList}
          numColumns={2} // Renders 2 items initially
          renderItem={({ item }) => {
            return (
              <View style={styles.productContainer}>
                <TouchableOpacity style={styles.productMainContainer}
                  onPress={() => navigation.navigate('Product')}>

                  <Icon.Heart stroke={'black'} width={20} height={20} style={{ marginLeft: 15, alignSelf: 'flex-start' }} />

                  <Image source={item.image} style={styles.productImage}></Image>
                  <View style={{ flexDirection: 'row' }}>
                    <View>
                      <Text style={styles.productPrice}>{item.price}</Text>
                      <Text>{item.productName}</Text>
                    </View>

                    <TouchableOpacity style={styles.addIcon}><Text style={{ color: 'white', fontSize: 17 }}>+</Text></TouchableOpacity>
                    {/* <Icon.Plus stroke={'white'} /> */}
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
        />

      </ScrollView>

    </View>
  )
}

export default HomeScreen;