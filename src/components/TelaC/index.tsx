import { View, Pressable, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export function TelaC(){
    return (
        <View className=" bg-blue-III h-20 shadow-slate-300 items-center justify-between flex flex-row">
            <Pressable className="w-14 h-14 rounded-full flex justify-center items-center ">
                <Ionicons name="menu" size={33} style={{ color: 'white' }}></Ionicons>
            </Pressable>

            <View><Text style={{fontSize:25}} className='font-bold text-green'> VOYAGES </Text></View>

            <Pressable className="ml-5 w-14 h-14 rounded-full flex justify-center items-center ">
                <Feather name="bell" size={30} style={{ color: 'white' }}></Feather>
            </Pressable>
        </View>

    )
}
export default TelaC;