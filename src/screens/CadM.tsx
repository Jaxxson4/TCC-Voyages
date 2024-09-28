import { ImageBackground, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { styles } from '../styles/styles';
import React from 'react';


export default function CadMotorista(){
  const navigation = useNavigation()

  const [dateOfBirth, setDateOfBirth] = useState('');

  const [passwordVisible, setPasswordVisible] = useState(false);

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

            <View style={styles.txtcad}>
              <Text style = {styles.Text_1}> Cadastro </Text> 
              <Text style = {styles.Text_2}> Motorista </Text>
            </View>

            <View style={styles.CadMimputes}>
            <TextInput
                style={styles.inputCadM}
                placeholder='Nome completo'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

            <TextInput
                style={styles.inputCadM}
                placeholder='Data de Nascimento'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                value={dateOfBirth}
                onChangeText={handleDateInput}  // Formata a entrada do usuário
                maxLength={10}/>

            <TextInput
                style={styles.inputCadM}
                placeholder='CPF'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                value={cpfCnpj}
                onChangeText={handleCpfCnpjInput}  // Formata a entrada de CPF/CNPJ
                maxLength={14}/>

                <TextInput
                style={styles.inputCadM}
                placeholder='CNH'
                autoCorrect={false}//pro corretor não funcionar
                keyboardType='numeric'
                onChangeText={() => {}}  // Formata a entrada do usuário
                maxLength={9}/>

                <TextInput
                style={styles.inputCadM}
                placeholder='Email'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <View style={styles.inputesCADSenha}>
                    <TextInput
                      style={styles.inptCC}
                      placeholder='Senha'
                      secureTextEntry={!passwordVisible} // alterna entre visível ou não
                      autoCorrect={false}
                      onChangeText={() => {}}
                      className='ml-2'
                    />

                    {/* Botão para alternar visibilidade, dentro do campo */}
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} >
                      <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color='#B2B2B2' className='ml-1'/>
                    </TouchableOpacity>
                </View>
        </View>

            <View style={styles.txtPag}>
              <Text style = {styles.Pagamento}> Dados para receber o pagamento </Text> 
            </View>

              <View style={styles.Cad_imputes}>
            <TextInput
                style={styles.input_CadM}
                placeholder='Chave Pix'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>
            </View>

              <View style={styles.ProximoBtn}>
                    <TouchableOpacity
                        style={styles.BtnProx}
                        activeOpacity={0.6}
                        onPress={ () => navigation.navigate({name: 'CadM2'} as never)}>
                        <Text style={styles.BtnProxTxt}>Próximo</Text>
                    </TouchableOpacity>
                </View>
              
            </ImageBackground>
            </ScrollView>
            </KeyboardAvoidingView>

        )}