import { ImageBackground, KeyboardAvoidingView, StyleSheet, Image, Text, TextInput, View, TouchableOpacity, Pressable, Platform, ScrollView} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Stack } from 'expo-router';
import { styles } from '../styles/styles';

export default function CadC(){
  const navigation = useNavigation()

  const [dateOfBirth, setDateOfBirth] = useState('');

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
                onChangeText={() => {}}/>

                <TextInput
                style={styles.inptCC}
                placeholder='Data de nascimento'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                value={dateOfBirth}
                onChangeText={handleDateInput}  // Formata a entrada do usuário
                maxLength={10} /> 
                
                <TextInput
                style={styles.inptCC}
                placeholder='CPF/CNPJ'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                value={cpfCnpj}
                onChangeText={handleCpfCnpjInput}  // Formata a entrada de CPF/CNPJ
                maxLength={18}  // Limita a entrada para CPF (14 caracteres) ou CNPJ (18 caracteres)
                />
                
                <TextInput
                style={styles.inptCC}
                placeholder='Email'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={styles.inptCC}
                placeholder='Senha'
                secureTextEntry
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>
            </View>

            <TouchableOpacity
                onPress={ () => navigation.navigate({name: 'C_Princ'} as never)}
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