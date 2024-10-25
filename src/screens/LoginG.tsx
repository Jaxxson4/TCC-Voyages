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
  
        // Busca os dados do usuário no Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const userType = userData.userType; // Pega o tipo de usuário
  
          // Redireciona para a tela correta
          if (userType === 'motorista') {
            navigation.navigate('M_Princ' as never); // Exemplo de rota para motorista
          } else if (userType === 'contratante') {
            navigation.navigate('C_Princ' as never); // Exemplo de rota para contratante
          }
        } else {
          console.log('Nenhum dado de usuário encontrado');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function userLogin(){
    signInWithEmailAndPassword(auth, userMail, userPass)
    .then((useCredential) => {
      const user = useCredential.user;
      alert('Login efetuado com sucesso.');
      navigation.navigate('C_Princ' as never);
      console.log(user);
    })
    .catch((error) => {
      
      // pesquisar forma para pegar os dados do usuario na tabela (dentro do firebase) para realizar um 
      // comparativo com o que foi digitado pelo usuário caso seja usuário e/ou senha errado.

    /*if(auth != userPass || auth != userMail){
      const errorCode = error.code;
      const errorMessage = error.message;
      //alert(errorMessage);
      alert('Usuario e/ou senha incorretos, tente novamente!');
      console.log(errorMessage);
    }else{*/
      const errorCode = error.code;
      const errorMessage = error.message;
      //alert(errorMessage);
      alert('Falha ao tentar efetuar o login, tente novamente!');
      console.log(errorMessage);
    //}
    })
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
                        onPress = {userLogin}
                        //onPress={ () => navigation.navigate({name: 'C_Princ'} as never)}
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