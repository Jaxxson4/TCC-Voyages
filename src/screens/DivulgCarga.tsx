import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, ScrollView, Platform, Linking } from 'react-native';
import { useNavigation } from 'expo-router';
import { stylesContrat } from '../styles/stylesContrat';
import { useState } from 'react';
import React from 'react';

export default function DivulgarCarga(){
    const navigation = useNavigation()

    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>
            <View className= "bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <TouchableOpacity className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center"
            onPress={ () => navigation.navigate({name: 'home'} as never)}>

            <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 mt-5' />
            </TouchableOpacity>
        </View>
        <View style={stylesContrat.txtcarga}>
              <Text style = {stylesContrat.Txtcarga_1}> 1. Dados Contratante </Text> 
            </View>

        <View style={stylesContrat.cargacimputes}>
            <TextInput
                style={stylesContrat.inputcarga}
                placeholder='Nome completo'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

            <TextInput
                style={stylesContrat.inputcarga}
                placeholder='E-mail'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>
            </View>

    <View style={stylesContrat.txtcarga2}>
    <Text style = {stylesContrat.Txtcarga_2}> 2. Detalhes da entrega </Text>
    <Text style = {stylesContrat.Txtcarga_3}> Rua, número, cidade, estado, CEP. </Text> 
    </View>

        <View style={stylesContrat.solcarga2}>

                <TextInput
                style={stylesContrat.inputcarga2}
                placeholder='Endereço carregamento'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={stylesContrat.inputcarga2}
                placeholder='Endereço de entrega'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={stylesContrat.inputcarga2}
                placeholder='Data para retirar a carga'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>
        </View>
        <View style={stylesContrat.Txtcarga_4}>
    <Text style = {stylesContrat.Txtcarga_5}> 3. Informações da carga </Text> 
      </View>

        <View style={stylesContrat.solcarga3}>
            <TextInput
                style={stylesContrat.inputcarga3}
                placeholder='Tipo carga'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={stylesContrat.inputcarga3}
                placeholder='Quantidade (caso tenha)'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={stylesContrat.inputcarga3}
                placeholder='Peso aproximadamente'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={stylesContrat.inputcarga3}
                placeholder='Informações de segurança'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>
              </View>
      
                <TouchableOpacity style={stylesContrat.BtnDivulgar} activeOpacity={0.6}>
                <Text style={stylesContrat.BtnDivulgarTxt}>Divulgar</Text>
              </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>        

    )
  }
