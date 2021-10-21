import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import { ChatListScreen } from './screens/ChatsListScreen';
import { ChatScreen } from './screens/ChatScreen';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="ChatList">
          <Stack.Screen name="ChatList" component={ChatListScreen} />
          <Stack.Screen name="ChatDetail" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
