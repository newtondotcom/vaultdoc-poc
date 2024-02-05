import * as React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import VaultScreen from './src/screens/Vault';
import Drawer from './src/ui/Drawer';

const localDrawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <localDrawer.Navigator drawerContent={(props) => <Drawer {...props} />}>
        <localDrawer.Screen name="Feed" component={VaultScreen} />
        <localDrawer.Screen name="Article" component={VaultScreen} />
      </localDrawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
