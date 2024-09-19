import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import StackRoutes from './StackRoutes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name= 'Home'
            component={ StackRoutes }
            options={{
                drawerIcon: ({color,size}) => <Feather name='home' color={color} size={size} />,
                drawerLabel: 'Início' 
            }}/>
        </Drawer.Navigator>
    )
}