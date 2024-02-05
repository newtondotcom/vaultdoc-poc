import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Linking, Text, View } from "react-native";

function Drawer(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ height: 150, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center' }}>
                <Text>My App</Text>
            </View>
            <DrawerItem
                label="Help"
                onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default Drawer;