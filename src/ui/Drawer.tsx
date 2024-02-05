import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Linking, StyleSheet, Text, View } from "react-native";

/*
            <DrawerItem
                label="Help"
                onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
*/

function Drawer(props: any) {
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