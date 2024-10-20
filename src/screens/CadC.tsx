import { ImageBackground, KeyboardAvoidingView, StyleSheet, Image, Text, TextInput, View, TouchableOpacity, Pressable, Platform, ScrollView} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { useState } from 'react';
import { Stack } from 'expo-router';
import { styles } from '../styles/styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function CadC(){
  const navigation = useNavigation()

  const [dateOfBirth, setDateOfBirth] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);

  //CAMPOS DE CADASTRO
  const [userName, setUserName] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userCPF_Cnpj, setUserCPF_Cnpj] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPass, setUserPass] = useState('');

  function CadC(){
    if(userName ==='' || userDate ==='' || userCPF_Cnpj ==='' || userMail ==='' || userPass ==='' ){
      alert('Todos os campos devem ser preenchidos');
      return;
    }else{
      createUserWithEmailAndPassword(auth, userMail, userPass)
      .then((useCredential) => {
        const user = useCredential.user;
        alert('O usuário' + userMail + 'foi criado.');
        console.log(user);
        router.replace('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);

        router.replace({name:'C_Princ'} as never);
      })
  
    }
  }

const handleDateInput = (text: string) => {
  // Remove qualquer caractere que não seja número
  let cleaned = text.replace(/[^0-9]/g, '');

  // Limita a quantidade de caracteres
  if (cleaned.length > 8) {
    cleaned = cleaned.substring(0, 8);
  }

  // Adiciona as barrinhas de formatação
  if (cleaned.length > 4) {
    cleaned = cleaned.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
  } else if (cleaned.length > 2) {
    cleaned = cleaned.replace(/(\d{2})(\d{0,2})/, '$1/$2');
  }

  setDateOfBirth(cleaned);
};

const [cpfCnpj, setCpfCnpj] = useState('');

const handleCpfCnpjInput = (text: string) => {
  // Remove qualquer caractere que não seja número
  let cleaned = text.replace(/[^0-9]/g, '');

  // Aplica a máscara do CPF (11 dígitos)
  if (cleaned.length <= 11) {
    cleaned = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
  }
  // Aplica a máscara do CNPJ (14 dígitos)
  else if (cleaned.length <= 14) {
    cleaned = cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
  }

  // Limita a quantidade de caracteres ao máximo (14 para CNPJ)
  if (cleaned.length > 18) {
    cleaned = cleaned.substring(0, 18);
  }

  setCpfCnpj(cleaned);
};


  return(
    <KeyboardAvoidingView  
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
    style={{ flex: 1 }}>

    <ScrollView style={{flex: 1}}
    showsHorizontalScrollIndicator={false}>

    <ImageBackground
      source={require('../assets/images/bg-white.png')}
      style={styles.bkgd}>

        <View className=" bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <TouchableOpacity className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center "
            onPress={ () => navigation.navigate({name: 'Cad'} as never)}>

            <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 mt-5' />
            </TouchableOpacity>
        </View>


        <View>
            <View style={styles.txtcad}>
              <Text style={styles.txtCadcont}>Cadastro</Text>

              <Text style={styles.txtcont}>Contratante</Text>
            </View>

            <View style={styles.inputesCAD}>
                <TextInput
                style={styles.inptCC}
                placeholder='Nome completo'
                autoCorrect={false}//pro corretor não funcionar
                value={userName}
                onChangeText={setUserName}/>

                <TextInput
                style={styles.inptCC}
                placeholder='Data de nascimento'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                value={userDate}
                onChangeText={setUserDate}  // Formata a entrada do usuário
                maxLength={10} /> 
                
                <TextInput
                style={styles.inptCC}
                placeholder='CPF/CNPJ'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                value={userCPF_Cnpj}
                onChangeText={setUserCPF_Cnpj} 
                 // Formata a entrada de CPF/CNPJ
                maxLength={18}  // Limita a entrada para CPF (14 caracteres) ou CNPJ (18 caracteres)
                />
                
                <TextInput
                style={styles.inptCC}
                placeholder='Email'
                autoCorrect={false}//pro corretor não funcionar
                value={userMail}
                onChangeText={setUserMail}/>


              <View style={styles.inputesCADSenha}>
                    <TextInput
                      style={styles.inptCC}
                      placeholder='Senha'
                      secureTextEntry={!passwordVisible} // alterna entre visível ou não
                      autoCorrect={false}
                      value={userPass}
                      onChangeText={setUserPass}
                      className='ml-2'
                    />

                    {/* Botão para alternar visibilidade, dentro do campo */}
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} >
                      <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color='#B2B2B2' className='ml-1'/>
                    </TouchableOpacity>
                </View>
                 
            </View> 

            <TouchableOpacity
                onPress={CadC}
             //  onPress={ () => navigation.navigate({name: 'C_Princ'} as never)}
                style={styles.ConfirmBtn}
                activeOpacity={0.6}>
                <Text style={styles.Confirmtxt}>Confirmar</Text>
            </TouchableOpacity>

        </View>

    </ImageBackground>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}



/*  <Stack>
       <Stack.Screen name='login' options={{ title: 'Login' }}/>
    </Stack>  */