import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    topMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
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
    itemTop: {
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 20,
    },
    flatlistContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 0.3,
        borderColor: '#8891A5'
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    productImage: {
        width: 30,
        height: 30,
        tintColor: 'grey'
    },
    productName: {
        fontSize: 14,
        fontWeight:
            '500', color: 'black'
    },
    totalProduct: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    increment: {
        backgroundColor: '#F8F9FB',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editText: {
        alignItems: 'flex-end',
        color: '#2A4BA0',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    txt: { color: '#2A4BA0' },
    subTotalContainer: {
        backgroundColor: '#F8F9FB',
        marginHorizontal: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: 40,
    },
    subTotalText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    bottomButton: {
        backgroundColor: '#2A4BA0',
        borderRadius: 20,
        justifyContent: 'center',
        height: 56,
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default styles;
