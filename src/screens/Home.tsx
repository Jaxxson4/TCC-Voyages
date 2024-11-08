import { useNavigation } from 'expo-router';
import { View, Text, KeyboardAvoidingView, Image, Pressable, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';
import Login from './LoginG';
import Cad from './Cad';


export function Home(){
const navigation = useNavigation()

function onPress(){
    console.log("Puta");
}
    return (
        <KeyboardAvoidingView  className=' h-full'>
            <ImageBackground
            source={require('../assets/images/estrada_b.png')}
            style={styles.bkgd}>

            <View style={{flex: 1}} className='max-full mt-28 items-center'>

            <Image source={require("../assets/images/Caminhao_0.png")} className='w-72 h-72' />

                <View className='mt-24 items-center'>
                    <Text style={{fontSize:32}} className='font-bold text-white'> Seja bem vindo(a)</Text>
                    <Text style={{fontSize:20}} className='font-normal text-white mt-3'> Entre fazendo Login ou Cadastro</Text>
                </View>

                <View className='mt-24 justify-center items-center gap-3' >
                    <TouchableOpacity
                    onPress={ () => navigation.navigate({name: 'Cad'} as never)}
                    style={styles.btn1}
                    activeOpacity={0.6}
                    className=" mt-6 bg-green-lin-I w-72 h-12 rounded-full flex justify-center items-center hover:bg-green-II" >
                    <Text style={styles.btn1Text} className='text-white font-bold'>CADASTRO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={ () => navigation.navigate({name: 'loging'} as never)}
                    activeOpacity={0.6}
                    style={styles.btn2}
                    className="bg-green-lin-I  h-12 rounded-full flex justify-center items-center hover:bg-green-II">
                    <View>
                    <Text style={styles.btn1Text} className='text-white font-bold'>LOGIN</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
export default Home;

/*onPress={ () => navigation.navigate({name: 'login'} as never)}>
const navigation = useNavigation()
function onPress(){
    console.log('Entrou no APP')
}*/