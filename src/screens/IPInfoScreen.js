import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Flag from '../components/Flag';
import ipinfo from '../apis/ipinfo';
import { Title, Headline, Subheading  } from 'react-native-paper';

const IPInfoScreen = () => {
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
        <Title>{ipInfo.ip}</Title>
        <Subheading>{ipInfo.org}</Subheading>
        <Flag countryCode={countryCode} />
    </SafeAreaView>
};

export default IPInfoScreen;