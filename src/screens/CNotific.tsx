import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform, StatusBar, Linking, ViewBase } from 'react-native';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import React from 'react';

export default function CNotific(){
    const navigation = useNavigation()

    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

        <View className=" bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">
            <TouchableOpacity 
            onPress={ () => navigation.navigate({name: 'C_Princ'} as never)}>
              <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 mt-5' />
            </TouchableOpacity>
            <Text 
            style={{color: '#10C18D', fontSize: 24, marginRight:'48%', marginTop:'3%', fontWeight:'500',}}
            >Notificações</Text>
        </View>


        <View style={styles.Notifications}>
            <View style={styles.Novo}>
                <Text style={styles.txtNovo}>Novo</Text>
            </View>
            <View style={styles.div}>
              <Image className='w-10 h-10 ml-7' source={require("../assets/images/perfil.png")} />
              <View style={{flexDirection:'column', marginVertical: '2%'}}>
                <Text style={styles.TxtNome}>Solicitação de serviço</Text>
              </View>
              <TouchableOpacity style={styles.ButtonPerfil} 
              onPress={ () => navigation.navigate({name: 'Pedidos'} as never)}>
                <Text style={styles.TxtButton}>Ver mais</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.EntregaConluida}>
                <Image source={require("../assets/images/true.png")}/>
                <Text style={styles.Text_Entregas} >Cadastro concluído</Text>
            </View>
        </View>
        <View style={styles.Line}/>

    </ScrollView>
    </KeyboardAvoidingView>

)}   

const styles =  StyleSheet.create ({ 
    Notifications:{
        margin: '8%',
    },
    EntregaConluida:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    Text_Entregas:{
        fontSize: 20,
        color: 'blue',
        fontWeight: '600',
    },
    div:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        gap: 25,
        marginTop: '3%',
        marginLeft: '2%'
      },
      TxtNome:{
        fontSize: 17,
        fontWeight:'600',
      },
      TxtTruck:{
        fontSize: 14,
        fontWeight:'500',
        color:'grey',
      },
      TxtPlaca:{
        fontSize: 14,
        fontWeight:'600',
        color:'#484848',
      }, 
      ButtonPerfil:{
        backgroundColor:'#10C18D',
        marginVertical: '3%',
        marginRight: '5%',
        borderRadius: 40,
        height: 30,
        width: 100,
        paddingVertical: 2,
        justifyContent: "center",
        alignItems: 'center',
      }, 
      TxtButton:{
        fontSize: 17,
        fontWeight:'500',
        color:'#FFF',
      },
      Novo:{
      },
      txtNovo:{
        fontWeight: '700',
        fontSize: 20,
        color: '#10C18D'      
    },
    Line:{
        height: 1,
        width: '100%',
        backgroundColor: '#BCBCBC',
    },
})