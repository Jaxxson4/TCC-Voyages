import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Platform, Image} from 'react-native';
import { useNavigation } from 'expo-router';
import { styles } from '../styles/styles';
import { useReducer, useState } from 'react';
import { auth, db } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';

export default function Login(){
  const navigation = useNavigation()
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const userPassTable = "teste";
  const userMailTable = "mail@mail.com"

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        alert('Login efetuado com sucesso.');

        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const userType = userData.userType;

            // Redireciona com base no tipo de usuário
            if (userType === 'motorista') {
              navigation.navigate('M_Princ' as never);
            } else if (userType === 'contratante') {
              navigation.navigate('C_Princ' as never);
            }
          } else {
            console.log('Nenhum dado de usuário encontrado');
          }
        } catch (error) {
          console.error('Erro ao acessar dados do usuário:', error);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
          alert('Usuário e/ou senha incorretos, tente novamente!');
        } else {
          alert('Falha ao tentar efetuar o login, tente novamente!');
        }
        console.error(errorMessage);
      });

  }

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
                value={userMail}
                onChangeText={setUserMail}/>

              <View style={styles.inputesCADSenha}>
                <TextInput style={styles.inptCC} placeholder='Senha' secureTextEntry={!passwordVisible} autoCorrect={false} value={userPass} onChangeText={setUserPass} />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} >
                  <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color='#B2B2B2'/>
                </TouchableOpacity>
              </View>

                <View>
                    <TouchableOpacity
                        onPress={() => handleLogin(userMail, userPass)}
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