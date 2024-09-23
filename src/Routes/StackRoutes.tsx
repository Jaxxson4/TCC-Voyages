import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import LoginG from '../screens/LoginG'
import CadC from "../screens/CadC";
import CadM from "../screens/CadM";
import Cad from "../screens/Cad"
import CadM2 from "../screens/CadM2";
import C_Princ from "../screens/C_Princ";
import SolicitarServico from "../screens/SolicitarServico";
import Pagamento from "../screens/Pagamento";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Sol_Servico">
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

            <Stack.Screen
            name="Sol_Servico"
            component={ SolicitarServico }/>   

            <Stack.Screen
            name="Pagamento"
            component={ Pagamento }/>

        </Stack.Navigator>
    )
}


/*      

 initialRouteName="Home">


*/
