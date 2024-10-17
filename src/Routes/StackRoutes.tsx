import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from '../screens/Home'; // FAZER ANIMAÇÃO
import LoginG from '../screens/LoginG'
import CadC from "../screens/CadC";
import CadM from "../screens/CadM";
import Cad from "../screens/Cad"
import CadM2 from "../screens/CadM2";
import C_Princ from "../screens/C_Princ";
import SolicitarServico from "../screens/SolicitarServico";
import Pagamento from "../screens/Pagamento";
import Motoristas from "../screens/Motoristas";
import CargasDivulgadas from "../screens/CargasDivlg";
import DivulgarCarga from "../screens/DivulgCarga";
import M_Princ from "../screens/M_Princ";
import Perfil from "../screens/perfil";
import PagEntregas from "../screens/PagEntregas";
import ConfirmarPedido from "../screens/confirmarP";
import Trajetos from "../screens/Trajetos";
import M_Pagamento from "../screens/M_Pagamento";
import Cargas_M from "../screens/Cargas_M";
import CNotific from "../screens/CNotific";
import MNotific from "../screens/MNotific";
import Pedidos from "../screens/Pedidos";
import { View } from "react-native-reanimated/lib/typescript/Animated";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function StackRoutes(){
    return(
    
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Pedidos">
            {/*---------------------TELAS MOTORISTA--------------------*/}
            
            <Stack.Screen
            name="M_Princ"
            component={ M_Princ }/>   

            <Stack.Screen
            name="Trajetos"
            component={ Trajetos }/>

            <Stack.Screen
            name="M_Pagamento"
            component={ M_Pagamento }/>

            <Stack.Screen
            name="Cargas_M"
            component={ Cargas_M } />

            <Stack.Screen
            name="MNotific"
            component={ MNotific } />

            <Stack.Screen
            name="Pedidos"
            component={ Pedidos } />
{/*--------------------TELAS DE ENTRADA---------------------*/}
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

{/*------------------TELAS CONTRATANTE------------------*/}

            <Stack.Screen
            name="C_Princ"
            component={ C_Princ }/>   

            <Stack.Screen
            name="Sol_Servico"
            component={ SolicitarServico }/>   

            <Stack.Screen
            name="Pagamento" 
            component={ Pagamento }/>

            <Stack.Screen
            name="Motoristas" 
            component={ Motoristas }/>

            <Stack.Screen
            name="CargasD"
            component={ CargasDivulgadas } />

            <Stack.Screen
            name="Divulgação" //IGUAL SOLICITAÇÃO
            component={ DivulgarCarga } />

            <Stack.Screen
            name="perfil"
            component={ Perfil } />

            <Stack.Screen
            name="Conf_Pedido"
            component={ ConfirmarPedido } />

            <Stack.Screen 
            name="Entregas"
            component={ PagEntregas }/>

            <Stack.Screen
            name="CNotific"
            component={ CNotific } />

        </Stack.Navigator>
    )
}


/*      

 initialRouteName="Home">


*/
