import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Flag from '../components/Flag';
import ipinfo from '../apis/ipinfo';
import { Title, Headline, Subheading  } from 'react-native-paper';
import {IPINFO_APIKEY} from '@env';

const IPInfoScreen = () => {
    console.log({IPINFO_APIKEY});
    
    const [ipInfo, setIpInfo] = useState(null);
    const [countryCode, setCountryCode] = useState(null);

    const getIpInfo = async () => {
      const response = await ipinfo.get(`/`);

      setIpInfo(response.data);
      
      setCountryCode(response.data.country);
    };

    useEffect(() => {
        getIpInfo();
    }, []);
  
    if (!ipInfo) {
      return null;
    }

    return <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.container}>
            <Title>{ipInfo.ip}</Title>
            <Subheading>{ipInfo.org}</Subheading>
            <Flag countryCode={countryCode} />
        </View>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    container :{
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex:1
    }
});

export default IPInfoScreen;