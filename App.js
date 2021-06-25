import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider, DefaultTheme, BottomNavigation, Appbar } from 'react-native-paper';
import IPInfoScreen from './src/screens/IPInfoScreen';
import AboutScreen from './src/screens/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  
  const [routes] = React.useState([
    { key: 'ipinfo', title: 'IP Info', icon: 'home' },
    { key: 'about', title: 'About', icon: 'help' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ipinfo: IPInfoScreen,
    about: AboutScreen,
  });

  return (<BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />);
}

const App = () => {
  const Stack = createStackNavigator();

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{title: "My IP Info", headerStyle: { backgroundColor: '#3498db' }}} name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;