import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Pressable, ScrollView, Platform, StatusBar, Linking, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React from 'react';

export default function CargasDivulgadas(){
    const navigation = useNavigation()

    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

        <View className= " bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <TouchableOpacity className= "w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center"
            onPress={ () => navigation.navigate({name: 'Motoristas'} as never)}>

            <Image className='w-7 h-7 ml-7 mt-5' source={require("../assets/images/arrow-back.png")} />
            </TouchableOpacity>
            <Text style={{color: '#10C18D', fontSize: 21, marginLeft:'8%', marginTop:'3%', fontWeight:'500',}}
                  className='mr-44'>Perfil motorista</Text>
        </View>

            
        <View style = {styles.container}>
        <Image  className='w-20 h-20 ml-3 mr-3' style={styles.img} source={require("../assets/images/homem.png")} />
            <View>
                <Text style={{fontSize: 23}}>Motorista</Text>
                <Text style = {styles.Texto_1}> Idade: <Text style={{fontSize: 15, color:'#BCBCBC'}}>xxx</Text></Text> 
                <Text style = {styles.Texto_1}> Placa do caminhão: <Text style={{fontSize: 15, color:'#BCBCBC'}}>xxxx</Text></Text>
            </View>
        </View>
     

        <View style = {styles.textos}>

            <Text style = {styles.title}> Veículo </Text> 
            <Text style = {styles.subtitle}> Tipo do veículo: <Text style={{fontSize: 15, color:'#BCBCBC'}}>xxx</Text> </Text>
            <Text style = {styles.subtitle}> Carga que entrega: <Text style={{fontSize: 15, color:'#BCBCBC'}}>xxx</Text> </Text>
            <Text style = {styles.subtitle}> Limite de carga: <Text style={{fontSize: 15, color:'#BCBCBC'}}>xxx</Text> </Text>

            <Text style = {styles.title}> Atividade profissional </Text> 
            <Text style = {styles.subtitle}> Entregas feitas: <Text style={{fontSize: 15, color:'#BCBCBC'}}>xxx</Text></Text>

            <Text style = {styles.title}> Informações adicionais </Text> 
            <Text style = {styles.subtitle}> Contato: <Text style={{fontSize: 15, color:'#BCBCBC'}}>xxx</Text> </Text>
            <Text style = {styles.subtitle}> Histórico de manutenções: <Text style={{fontSize: 15, color:'#BCBCBC'}}>xxxxxxxxxxx</Text> </Text>
        </View>

        <TouchableOpacity style={styles.ButtonPerfil} 
              onPress={ () => navigation.navigate({name: 'Sol_Servico'} as never)}>
                <Text style={styles.TxtButton}>Solicitar</Text>
              </TouchableOpacity>


    </ScrollView>
</KeyboardAvoidingView>
)}


const styles =  StyleSheet.create ({ 

container: {
    flexDirection: 'row',
    marginLeft: '16%',
    marginTop: '10%',
    marginBottom:'6%',
},
img: {
    justifyContent: 'center',
    alignItems:'center',
},
Texto_1: {
    flexDirection:'row',
    justifyContent: 'flex-start',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
},
textos: {
    flex: 1,
    marginLeft: '16%',
    marginTop: '5%',
},
title: {
    color: '#163D89',
    marginTop: '8%',
    fontSize: 19,
    fontWeight: '700',
},
subtitle: {
    color: 'grey',
    marginTop: '5%',
    fontSize: 17,
    fontWeight: '600',
    maxWidth: '80%',
},
ButtonPerfil:{
    backgroundColor:'#10C18D',
    marginVertical: '3%',
    marginLeft: '60%',
    marginTop:'20%',
    borderRadius: 40,
    height: 40,
    width: 110,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: 'center',
  }, 
  TxtButton:{
    fontSize: 17,
    fontWeight:'500',
    color:'#FFF',
  },
})
