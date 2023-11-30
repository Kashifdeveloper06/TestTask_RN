import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backIcon: {
    backgroundColor: '#F8F9FB',
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    width: 7,
    height: 14,
  },
  bagIcon: {
    width: 15,
    height: 17,
  },
  reviews: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 26,
    paddingVertical: 14,
  },
  iconReview: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    marginLeft: 5,
  },
  sliderContainer: {
    flex: 1,
    borderWidth: 1,
  },
  favButton: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 58,
    height: 58,
    right: 10,
    top: 10,
  },
  favImage: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
  silderImges: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  priceContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 24,
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2A4BA0',
    fontWeight: '700',
  },
  offPrice: {
    backgroundColor: '#2A4BA0',
    marginLeft: 10,
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  addtoCart: {
    borderWidth: 1,
    borderColor: '#2A4BA0',
    width: 140,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#2A4BA0',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  buyNow: {
    borderWidth: 1,
    backgroundColor: '#2A4BA0',
    width: 140,
    height: 56,
    borderRadius: 20,
    justifyContent: 'center',
  },
  detailConatiner: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  detailText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
  productdetails: {
    fontSize: 16,
    color: '#8891A5',
  },
});

export default styles;
