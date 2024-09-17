import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import LoginG from '../screens/LoginG'
import CadC from "../screens/CadC";
import CadM from "../screens/CadM";
import Cad from "../screens/Cad"

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CadMotorista">
            <Stack.Screen 
            name="home" 
            component={ Home }/>

            <Stack.Screen
            name="loging"
            component={ LoginG }/>

            <Stack.Screen
            name="Cad"
            component={ Cad }/>

            <Stack.Screen 
            name="CadContratante" 
            component={ CadC }/>

            <Stack.Screen
            name="CadMotorista"
            component={ CadM }/>
        </Stack.Navigator>
    )
}


/*      

 initialRouteName="Home">


*/
