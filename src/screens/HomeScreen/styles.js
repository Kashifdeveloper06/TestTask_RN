import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topView: {
    backgroundColor: colors.App,
  },
  nameBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 22,
  },
  bagIcon: {
    width: 19,
    height: 21,
    tintColor: 'white',
  },
  userName: {
    color: colors.White,
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 30.05,
  },
  SearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(21, 38, 97, 10)',
    marginHorizontal: 17,
    height: 56,
    borderRadius: 28,
    paddingHorizontal: 20,
  },
  notification: {
    backgroundColor: '#F9B023',
    textAlign: 'center',
    borderRadius: 20,
    width: 20,
    height: 20,
    zIndex: 5,
    position: 'absolute',
    bottom: 10,
    left: 5,
  },
  dilveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingTop: 10,
  },
  dilveryTxtTop: {
    color: colors.Grey,
    fontSize: 11,
    fontWeight: '800',
  },
  dilveryTxtBotton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dilvery: {},
  dilveryTxt: {
    color: 'white',
    flexShrink: 14,
    fontWeight: '500',
    marginRight: 5,
  },
  bannerView: {
    marginVertical: 20,
  },
  bannerContainer: {
    width: 269,
    height: 123,
    backgroundColor: colors.Light_Yellow,
    marginLeft: 16,
    borderRadius: 20,
  },
  BannerImage: {
    width: 68,
    height: 68,
  },
  RecommandTextCon: {
    margin: 15,
  },
  RecommandText: {
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 38,
    color: 'black',
  },
});

export default styles;
