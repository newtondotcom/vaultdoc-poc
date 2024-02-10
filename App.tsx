import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/ui/Drawer';

function App() {
  return (
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
  );
}

export default App;
