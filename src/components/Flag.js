import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Flag = ({countryCode}) => {
    const imgSource = `https://www.countryflags.io/${countryCode}/flat/64.png`;

    console.log({countryCode, imgSource});

    return <View>
        <Image style={styles.image} source={{uri: imgSource}} />
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: 64,
        height: 64,
        borderRadius: 4,
        marginBottom: 5
    },
});

export default Flag;