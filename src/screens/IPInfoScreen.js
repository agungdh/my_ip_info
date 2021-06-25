import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Flag from '../components/Flag';
import ipinfo from '../apis/ipinfo';
import ipinfokey from '../apis/ipinfokey';
import { Title, Paragraph, Subheading, Dialog, Portal, Button  } from 'react-native-paper';

const IPInfoScreen = () => {
    const [ipInfo, setIpInfo] = useState(null);
    const [countryCode, setCountryCode] = useState(null);
    const [visible, setVisible] = useState(false);
    const [dialog, setDialog] = useState(false);
    
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const getIpInfo = async () => {
        try {
            const response = await ipinfo.get(`/`);

            setIpInfo(response.data);
            setCountryCode(response.data.country);
        } catch (error) {
            try {
                const response = await ipinfokey.get(`/`);
    
                setIpInfo(response.data);
                setCountryCode(response.data.country);
            } catch (error) {
                setVisible(true);
                setDialog(error.response.data.error);
            }
        }
    };

    useEffect(() => {
        getIpInfo();
    }, []);
  
    return <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.container}>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>{dialog ? dialog.title : ''}</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{dialog ? dialog.message : ''}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
                </Dialog>
            </Portal>
            <Title>{ipInfo ? ipInfo.ip : ''}</Title>
            <Subheading>{ipInfo ? ipInfo.org : ''}</Subheading>
            <Flag countryCode={countryCode} />
            <Button onPress={getIpInfo}>Refresh</Button>
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