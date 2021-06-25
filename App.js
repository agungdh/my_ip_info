import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import IPInfoScreen from './src/screens/IPInfoScreen';
import AboutScreen from './src/screens/AboutScreen';
import { BottomNavigation } from 'react-native-paper';

const App = () => {
  const [index, setIndex] = React.useState(0);
  
  const [routes] = React.useState([
    { key: 'ipinfo', title: 'IP Info', icon: 'home' },
    { key: 'about', title: 'About', icon: 'help' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ipinfo: IPInfoScreen,
    about: AboutScreen,
  });

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
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </PaperProvider>
  );
}

export default App;