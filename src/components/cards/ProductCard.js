import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { colors } from '../../utils/colors';

const ProductCard = ({ item }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.main}>
            <View style={styles.productContainer}>
                <TouchableOpacity style={styles.productMainContainer}
                    onPress={() => navigation.navigate('Product', { Data: item })}>
                    <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
                    <Icon.Heart stroke={'black'} strokeWidth={1} fill={colors.White} width={20} height={20} style={styles.heart} />
                    <View style={styles.dataContainer}>
                        <View>
                            <Text style={styles.productPrice}>{`$${item.price}`}</Text>
                            <Text>{item.brand}</Text>
                        </View>
                        <TouchableOpacity style={styles.addIcon}>
                            <Text style={styles.addText}>{`+`}</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    productContainer: {
        flex: 1,
        alignItems: 'center'
    },
    productMainContainer: {
        width: "95%",
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10,
        borderRadius: 12,
        backgroundColor: colors.White,
        shadowColor: colors.Black,
        shadowOpacity: 0.5,
        elevation: 3,
    },
    productImage: {
        width: '100%',
        height: 160,
        borderRadius: 10
    },
    heart: {
        marginLeft: 15,
        alignSelf: 'flex-start',
        position: 'absolute',
        margin: '5%'
    },
    productPrice: {
        color: 'black',
        fontWeight: '600',
        fontSize: 14
    },
    dataContainer: {
        width: '90%',
        margin: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addIcon: {
        backgroundColor: colors.App,
        borderRadius: 20,
        width: 24,
        height: 24,
        alignItems: 'center',
        marginLeft: 10
    },
    addText: {
        color: 'white',
        fontSize: 17
    }
})