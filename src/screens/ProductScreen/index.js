import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Icons } from '../../assets';
import styles from './styles';
import { colors } from '../../utils/colors';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native'
import StarRating from '../../components/common/StarRating';


const ProductScreen = ({ route }) => {
  const navigation = useNavigation();
  const item = route.params.Data;
  const width = Dimensions.get('window').width;
  console.log('Product', item)

  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <TouchableOpacity style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Image source={Icons.back} style={styles.Icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={{ backgroundColor: '#F9B023', textAlign: 'center', borderRadius: 20, width: 20, height: 20, zIndex: 5, position: 'absolute', bottom: 10, left: 5 }}>{`3`}</Text>
          <Image source={Icons.bag} style={styles.bagIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Text style={{ fontSize: 60, color: 'black', lineHeight: 62, marginHorizontal: 20, fontWeight: 300 }}>
          {`${item.category}`}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 60, color: 'black', lineHeight: 62, marginHorizontal: 20 }}>
          {`${item.brand}`}
        </Text>
        <View style={styles.reviews}>
          <StarRating rating={item.rating} />
          <Text style={styles.iconReview}>{`${item.rating}`}</Text>
        </View>

        <View>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={item.images}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <View style={styles.sliderContainer}>
                <TouchableOpacity style={styles.favButton}>
                  <Image source={Icons.heart} style={styles.favImage} />
                </TouchableOpacity>
                <Image
                  source={{ uri: item }}
                  style={styles.silderImges} />
                <Text>hello</Text>
              </View>
            )}
          />
        </View>

        <View style={{ marginLeft: '5%', marginTop: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.App }}>{`${item.title}`}</Text>
        </View>
        <View style={styles.priceContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.price}>{`$${item.price}`}</Text>
            <Text style={styles.offPrice}>{`${item.discountPercentage}% OFF`}</Text>
          </View>
          <View>
            <Text style={styles.offPrice}>{`Stock - ${item.stock}`}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addtoCart}
            onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.buttonText}>{'Add To Cart'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNow}>
            <Text style={[styles.buttonText, { color: 'white' }]}>{'Buy Now'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailConatiner}>
          <Text style={styles.detailText}>Details</Text>
          <Text style={styles.productdetails}>{`${item.description}`}</Text>
        </View>

      </ScrollView>

    </View>
  )
}

export default ProductScreen;
