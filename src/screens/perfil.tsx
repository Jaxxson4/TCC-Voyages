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
                  className='mr-44'>Buscar motoristas</Text>
        </View>

            
        <View style = {styles.container}>
        <Image style={styles.img} source={require("../assets/images/perfil.png")} />
              <Text style = {styles.Texto_1}> Idade: 54 anos </Text> 
              <Text style = {styles.Texto_2}> Placa: SHW-5I82 </Text>
        </View>
     

        <View style = {styles.textos}>
            <Text style = {styles.title}> Veículo </Text> 
            <Text style = {styles.subtitle}> Tipo do veículo: Carreta </Text>
            <Text style = {styles.subtitle1}> Carga que entrega: Granel </Text>
            <Text style = {styles.subtitle2}> Limite de carga: 33 toneladas </Text>

            <Text style = {styles.title2}> Atividade profissional </Text> 
            <Text style = {styles.subtitle3}> Entregas feitas: 26 </Text>

            <Text style = {styles.title3}> Informações adicionais </Text> 
            <Text style = {styles.subtitle4}> Contato: joao_paulo@gmail.com </Text>
            <Text style = {styles.subtitle5}> Histórico de manutenções: troca de cambio, óleo e velas. </Text>
        </View>

        <TouchableOpacity style={styles.BtnSolicitar} activeOpacity={0.6}
        onPress={ () => navigation.navigate({name: 'Sol_Servico'} as never)}>
                <Text style={styles.BtnSolicitarTxt}>Solicitar</Text>
        </TouchableOpacity>


    </ScrollView>
</KeyboardAvoidingView>
)}


const styles =  StyleSheet.create ({ 

container: {
    flex: 1,
    marginLeft: '16%',
    marginTop: '20%',
    marginBottom:'6%',
},
img: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderBlockColor: '#000',
    justifyContent: 'center',
    alignItems:'center',
},
Texto_1: {
    flexDirection:'row',
    justifyContent: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
},
Texto_2: {
    justifyContent: 'flex-start',
    flexDirection:'column',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
},
textos: {
    flex: 1,
    marginLeft: '16%',
    marginTop: '20%',
    marginBottom:'6%',
},
title: {
    color: '#113164',
    marginTop: '11%',
    fontSize: 18,
    fontWeight: '600',
},
subtitle: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
subtitle1: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
subtitle2: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
title2: {
    color: '#113164',
    marginTop: '11%',
    fontSize: 18,
    fontWeight: '600',
},
subtitle3: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
title3: {
    color: '#113164',
    marginTop: '11%',
    fontSize: 18,
    fontWeight: '600',
},
subtitle4: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
subtitle5: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
BtnSolicitar: {
    backgroundColor: '#10C18D',
    height:'12%',
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    marginTop:'20%',
    borderRadius: 50,
    marginBottom:'8%',
},
BtnSolicitarTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 40,
    paddingRight: 40,
},
})
