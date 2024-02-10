import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { Linking, StyleSheet, Text, View } from "react-native";
import FolderScreen from "../screens/Vault";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Document from "../screens/Document";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import DocsScreen from "../screens/Docs";

/*
            <DrawerItem
                label="Help"
                onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
*/

/*
function DrawerCustom(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <View >
                <Text style={styles.title}>VaultDoc</Text>
                <Text style={styles.subtitle}>the new way to securely stores your documents 🔒</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

function Drawer(){
    const localDrawer = createDrawerNavigator();
    return (
        <localDrawer.Navigator drawerContent={(props) => <DrawerCustom {...props} />} initialRouteName="VaultDoc">
          <localDrawer.Screen name="VaultDoc" component={DocumentStack} />
          <localDrawer.Screen name="Settings" component={VaultScreen} />
        </localDrawer.Navigator>
    );
}
*/

function DocumentStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Vault">
        <Stack.Screen
          name="FoldersScreen"
          component={FolderScreen}
          headerShown={false}
          options={{ headerMode: 'none', headerShown: false }}
        />
        <Stack.Screen
          name="DocsScreen"
          component={DocsScreen}
          headerShown={false}
          options={{ headerMode: 'none', headerShown: false }}
        />
        <Stack.Screen
          name="Document"
          component={Document}
          options={{ headerMode: 'none', headerShown: false }}
        />
      </Stack.Navigator>
    );
}

function Drawer() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator initialRouteName="Vault" 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Vault') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Vault" component={ DocumentStack}
          options={{ headerMode: 'none', headerShown: false }} />
            <Tab.Screen name="Settings" component={Document}
          options={{ headerMode: 'none', headerShown: false }} />

        </Tab.Navigator>
    );
}

export default Drawer;

const styles = StyleSheet.create({
    title: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        paddingHorizontal: 13,
        paddingVertical: 5,
        alignItems: 'center',
        color: 'grey',
        fontSize: 12,
    },
});