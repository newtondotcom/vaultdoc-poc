import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { Linking, StyleSheet, Text, View } from "react-native";
import VaultScreen from "../screens/Vault";
import { createStackNavigator } from "@react-navigation/stack";
import Document from "../screens/Document";

/*
            <DrawerItem
                label="Help"
                onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
*/

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

function DocumentStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Vault">
        <Stack.Screen
          name="Vault"
          component={VaultScreen}
          headerShown={false}
          options={{ headerMode: 'none', headerShown: false }}
        />
        <Stack.Screen
          name="Document"
          component={Document}
        />
      </Stack.Navigator>
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