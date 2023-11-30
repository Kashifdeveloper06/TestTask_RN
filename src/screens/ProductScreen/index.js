import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Icons, Images } from '../../assets';
import styles from './styles';
import { colors } from '../../utils/colors';
import * as Icon from 'react-native-feather';
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native'


const ProductScreen = () => {

  const width = Dimensions.get('window').width;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Top Bar */}
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

        {/* Top Text */}
        <Text style={{ fontSize: 50, color: 'black', lineHeight: 62, marginHorizontal: 20 }}>{`Thin  Choise `}<Text style={{ fontWeight: '800' }}>{` Top Orange`}</Text></Text>

        {/* Reviews */}
        <View style={styles.reviews}>
          <Icon.Star fill={'#F9B023'} />
          <Icon.Star fill={'#F9B023'} />
          <Icon.Star fill={'#F9B023'} />
          <Icon.Star fill={'#F9B023'} />
          <Icon.Star fill={'#F9B023'} />
          <Text style={styles.iconReview}>{`110 Reviews`}</Text>
        </View>

        {/* Image Sliders */}
        <View>
          <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            // onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
              <View style={styles.sliderContainer}>
                <TouchableOpacity style={styles.favButton}>
                  <Image source={Icons.heart} style={styles.favImage} />
                </TouchableOpacity>
                <Image
                  source={{ uri: 'https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg' }}
                  style={styles.silderImges} />
                <Text>hello</Text>
              </View>
            )}
          />
        </View>

        {/* Product Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`$34.70`}<Text style={{ fontWeight: '100' }}>{`/KG`}</Text></Text>
          <Text style={styles.offPrice}>{`$22.04 OFF`}</Text>
        </View>

        {/* Buy Now Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addtoCart}
          onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNow}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        {/* Product Details */}
        <View style={styles.detailConatiner}>
          <Text style={styles.detailText}>Details</Text>
          <Text style={styles.productdetails}>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.</Text>
        </View>

      </ScrollView>

    </View>
  )
}

export default ProductScreen;
