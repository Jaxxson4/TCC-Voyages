import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Pagamento">
            {/*---------------------TELAS MOTORISTA--------------------*/}
            
            <Stack.Screen
            name="M_Princ"
            component={ M_Princ }/>   







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
            name="Pagamento" // PRÓXIMA PARA EDITAR!!!!
            component={ Pagamento }/>

            <Stack.Screen
            name="Motoristas" // PRÓXIMA PARA EDITAR!!!!
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
            component={ PagEntregas }
            options={{ title: 'Entregas' }}/>
        </Stack.Navigator>
    )
}


/*      

 initialRouteName="Home">


*/
