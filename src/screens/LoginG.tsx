import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Platform, Image} from 'react-native';
import { useNavigation } from 'expo-router';
import { styles } from '../styles/styles';

export default function Login(){
  const navigation = useNavigation()
  return(
    <KeyboardAvoidingView  
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
    style={{ flex: 1 }}>
      
    <ImageBackground
      source={require('../assets/images/bg-white.png')}
      style={styles.bkgd}>

        <View className=" bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <TouchableOpacity className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center "
            onPress={ () => navigation.navigate({name: 'home'} as never)}>

            <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 mt-5' />
            </TouchableOpacity>
        </View>

          <View style={styles.container}>
            <Text style={styles.Texth1}> Login</Text>
            <Text style={styles.Texth2}> Olá, bom ver você novamente</Text>
          </View>
    
            <View style={styles.inputes}>
                <TextInput
                style={styles.input}
                placeholder='Email'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={styles.input}
                placeholder='Senha'
                secureTextEntry
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <View>
                    <TouchableOpacity
                        onPress={ () => navigation.navigate({name: 'C_Princ'} as never)}
                        style={styles.BtnEntrar}
                        activeOpacity={0.6}>
                        <Text style={styles.BtnEntrarTxt}>Entrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
    </ImageBackground>
    </KeyboardAvoidingView>
  )
}



/*  <Stack>
       <Stack.Screen name='login' options={{ title: 'Login' }}/>
    </Stack>  */