import React from 'react';
import { SafeAreaView, StyleSheet, View, Linking } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { Title, Subheading, Button } from 'react-native-paper';

const AboutScreen = () => {
    return <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.container}>
            <Title>My IP Info</Title>
            <Subheading>Version 1.0.0</Subheading>
            <Button icon="github" mode="contained" onPress={() => {
                Linking.openURL(`https://github.com/agungdh/my_ip_info`);
            }}>Source Code</Button>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container :{
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex:1
    }
});

export default AboutScreen;