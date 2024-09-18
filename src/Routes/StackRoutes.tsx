import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import LoginG from '../screens/LoginG'
import CadC from "../screens/CadC";
import CadM from "../screens/CadM";
import Cad from "../screens/Cad"
import CadM2 from "../screens/CadM2";
import C_Princ from "../screens/C_Princ";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CadM2">
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

            <Stack.Screen
            name="CadM2"
            component={ CadM2 }/> 

            <Stack.Screen
            name="C_Princ"
            component={ C_Princ }/> 
            
        </Stack.Navigator>
    )
}


/*      

 initialRouteName="Home">


*/
