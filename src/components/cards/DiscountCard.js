import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

const DiscountCard = ({item}) => {
  return (
    <View style={styles.main}>
      <View style={styles.bannerContainer}>
        <View style={styles.bannerMainContainer}>
          <Image source={item.image} style={styles.BannerImage}></Image>
          <View>
            <Text style={styles.bannerText}>{item.text}</Text>
            <Text style={[styles.bannerText, {fontWeight: '800'}]}>
              {item.offtext}
            </Text>
            <Text style={{color: colors.White}}>{item.orderText}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DiscountCard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bannerContainer: {
    width: 269,
    height: 123,
    backgroundColor: colors.Dark_Yellow,
    marginLeft: 16,
    borderRadius: 16,
  },
  bannerMainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  BannerImage: {
    width: 68,
    height: 68,
  },
  bannerText: {
    fontSize: 20,
    color: 'white',
  },
});
