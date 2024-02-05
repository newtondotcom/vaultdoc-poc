import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { DrawerNavigationHelpers, DrawerDescriptorMap } from "@react-navigation/drawer/lib/typescript/src/types";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import { JSX, ReactNode, RefAttributes } from "react";
import { Linking, ScrollView, ScrollViewProps, Text, View } from "react-native";

function Drawer(props: (JSX.IntrinsicAttributes & ScrollViewProps & { children: ReactNode; } & RefAttributes<ScrollView>) | (JSX.IntrinsicAttributes & { state: DrawerNavigationState<ParamListBase>; navigation: DrawerNavigationHelpers; descriptors: DrawerDescriptorMap; })) {
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