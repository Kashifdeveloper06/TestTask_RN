import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    topView: {
        backgroundColor: colors.blue
    },
    nameBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
        paddingHorizontal: 22
    },
    bagIcon: {
        width: 19,
        height: 21,
        tintColor: 'white'
    },
    userName: {
        color: colors.white,
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 30.05
    },
    SearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(21, 38, 97, 10)',
        marginHorizontal: 17,
        // width: 335,
        height: 56,
        borderRadius: 28,
        paddingHorizontal: 20
    },
    dilveryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20,
        paddingTop: 10
    },
    dilveryTxtTop: {
        color: colors.grey,
        fontSize: 11,
        fontWeight: '800'
    },
    dilveryTxtBotton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dilvery: {

    },
    dilveryTxt: {
        color: 'white',
        flexShrink: 14,
        fontWeight: '500',
        marginRight: 5
    },
    bannerView: { marginVertical: 20 },
    bannerContainer: {
        // flexDirection: 'row',
        width: 269,
        height: 123,
        backgroundColor: colors.yellow,
        marginLeft: 16,
        borderRadius: 16,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    BannerImage: {
        width: 68,
        height: 68
    },
    bannerMainContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flex: 1 },
    bannerText: { fontSize: 20, color: 'white' },
    RecommandTextCon: { margin: 15 },
    RecommandText: { fontSize: 30, fontWeight: '400', lineHeight: 38, color: 'black' },
    productContainer: { flex: 1, alignItems: 'center' },
    productMainContainer: { alignItems: 'center', justifyContent: 'space-around', width: 160, height: 194, backgroundColor: 'rgba(248, 249, 251, 1)', marginBottom: 10, borderRadius: 12 },
    productImage: { width: 68, height: 68, tintColor: 'grey' },
    productPrice: { color: 'black', fontWeight: '600', fontSize: 14 },
    addIcon: { backgroundColor: colors.blue, borderRadius: 20, width: 24, height: 24, alignItems: 'center', marginLeft: 10 }
});

export default styles;