import * as React from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StackRoutes from '../Routes/StackRoutes';
import DrawerRoutes from "./DrawerRoutes";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator ()

export function AppNavigator(){
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  )
}
