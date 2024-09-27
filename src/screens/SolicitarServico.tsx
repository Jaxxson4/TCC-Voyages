import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform, StatusBar, Linking } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';
import { stylesContrat } from '../styles/stylesContrat';
import { useState } from 'react';
import React from 'react';
import { useNavigation } from 'expo-router';

export default function SolicitarServico(){
  const handleLinkPress = () => {
    Linking.openURL('https://raquelagostini4.wixsite.com/meusite');
  };
  const navigation = useNavigation()

  const [isChecked, setChecked] = useState(false);
  function setSelectedLanguages(selected: any, arg1: any) {
  throw new Error('Function not implemented.');
  }
    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1}}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

        <View className=" bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">
            <TouchableOpacity 
            onPress={ () => navigation.navigate({name: 'C_Princ'} as never)}>
              <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 -mr-11 mt-5' />
            </TouchableOpacity>
            <Text style={{color: '#10C18D', fontSize: 24, marginLeft:'20%', marginTop:'3%', fontWeight:'500',}}
                  className='mr-44'>Solicitar serviço</Text>

        </View>

    <View>
        <View style={stylesContrat.txtservico}>
              <Text style = {stylesContrat.Txtservico_1}> 1. Dados Contratante </Text> 
    
            <View style={stylesContrat.solcimputes}>
                <TextInput
                    style={stylesContrat.inputservico}
                    placeholder='Nome completo'
                    autoCorrect={false}//pro corretor não funcionar
                    onChangeText={() => {}}/>

                <TextInput
                    style={stylesContrat.inputservico}
                    placeholder='E-mail'
                    autoCorrect={false}//pro corretor não funcionar
                    onChangeText={() => {}}/>
            </View>
        </View>

        <View style={stylesContrat.txtservico2}>
          <Text style = {stylesContrat.Txtservico_2}> 2. Detalhes da entrega </Text>
          <Text style = {stylesContrat.Txtservico_3}> Rua, número, cidade e estado. </Text> 
              <View style={stylesContrat.solcimputes2}>
                  <TextInput
                  style={stylesContrat.inputservico2}
                  placeholder='Data para retirar a carga'
                  autoCorrect={false}//pro corretor não funcionar
                  onChangeText={() => {}}/>

                  <TextInput
                  style={stylesContrat.inputservico2}
                  placeholder='Endereço de retirada'
                  autoCorrect={false}//pro corretor não funcionar
                  onChangeText={() => {}}/>

                  <TextInput
                  style={stylesContrat.inputservico2}
                  placeholder='Endereço de entrega'
                  autoCorrect={false}//pro corretor não funcionar
                  onChangeText={() => {}}/>
              </View>
        </View>

        <View style={stylesContrat.Txtservico_4}>
            <Text style = {stylesContrat.Txtservico_5}> 3. Informações da carga </Text> 

            <View style={stylesContrat.solcimputes3}>
            <TextInput
                style={stylesContrat.inputservico3}
                placeholder='Tipo carga'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={stylesContrat.inputservico3}
                placeholder='Quantidade (caso tenha)'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={stylesContrat.inputservico3}
                placeholder='Peso aproximadamente'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={stylesContrat.inputservico3}
                placeholder='Informações de segurança'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>
              </View>
        </View>
    </View>
            <View style={stylesContrat.Termos}>
              <CheckBox style = {stylesContrat.checkbox} color = '#163D89' value = {isChecked} onValueChange = {setChecked}/>
                <Text style = {stylesContrat.Txtservico_7}> Li e concordo com os </Text> 
                
                <Text onPress={handleLinkPress} style={{ color: 'blue', textDecorationLine: 'underline' }}> Termos de uso </Text>  
                <Text style = {stylesContrat.Txtservico_7}>e </Text> 
            </View>                
            
            <Text onPress={handleLinkPress} 
            style={{ color: 'blue', textDecorationLine: 'underline',
                marginLeft:'22%',
                marginBottom:'15%',
             }}> Política de privacidade</Text>

                <TouchableOpacity style={stylesContrat.BtnConfirmar} activeOpacity={0.6}>
                <Text style={stylesContrat.BtnConfirmarTxt}>Confirmar pedido</Text>
              </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>        

    )
  }
