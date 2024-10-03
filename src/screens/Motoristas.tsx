import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, Image, TouchableOpacity, View, Pressable, ScrollView, Platform, StatusBar, Linking } from 'react-native';
import { useState } from 'react';
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
            onPress={ () => navigation.navigate({name: 'C_Princ'} as never)}>

            <Image className='w-7 h-7 ml-7 mt-5' source={require("../assets/images/arrow-back.png")} />
            </TouchableOpacity>
            <Text style={{color: '#10C18D', fontSize: 21, marginLeft:'8%', marginTop:'3%', fontWeight:'500',}}
                  className='mr-44'>Buscar motoristas</Text>
        </View>

        <View style={stylemotoristas.ContainerMotoristas}>

            <View style={stylemotoristas.div}>
              <Image className='w-10 h-10 ml-7' source={require("../assets/images/perfil.png")} />
              <View style={{flexDirection:'column', marginVertical: '2%'}}>
                <Text style={stylemotoristas.TxtNome}>Nome</Text>
                <Text style={stylemotoristas.TxtTruck}>Tipo caminhão - Marca</Text>
                <Text style={stylemotoristas.TxtPlaca}>Placa</Text>
              </View>
              <TouchableOpacity style={stylemotoristas.ButtonPerfil} 
              onPress={ () => navigation.navigate({name: 'perfil'} as never)}>
                <Text style={stylemotoristas.TxtButton}>Perfil</Text>
              </TouchableOpacity>
            </View>

            <View style={stylemotoristas.div}>
              <Image className='w-10 h-10 ml-7' source={require("../assets/images/perfil.png")} />
              <View style={{flexDirection:'column', marginVertical: '2%'}}>
                <Text style={stylemotoristas.TxtNome}>Nome</Text>
                <Text style={stylemotoristas.TxtTruck}>Tipo caminhão - Marca</Text>
                <Text style={stylemotoristas.TxtPlaca}>Placa</Text>
              </View>
              <TouchableOpacity style={stylemotoristas.ButtonPerfil} 
              onPress={ () => navigation.navigate({name: 'perfil'} as never)}>
                <Text style={stylemotoristas.TxtButton}>Perfil</Text>
              </TouchableOpacity>
            </View>

            <View style={stylemotoristas.div}>
              <Image className='w-10 h-10 ml-7' source={require("../assets/images/perfil.png")} />
              <View style={{flexDirection:'column', marginVertical: '2%'}}>
                <Text style={stylemotoristas.TxtNome}>Nome</Text>
                <Text style={stylemotoristas.TxtTruck}>Tipo caminhão - Marca</Text>
                <Text style={stylemotoristas.TxtPlaca}>Placa</Text>
              </View>
              <TouchableOpacity style={stylemotoristas.ButtonPerfil} 
              onPress={ () => navigation.navigate({name: 'perfil'} as never)}>
                <Text style={stylemotoristas.TxtButton}>Perfil</Text>
              </TouchableOpacity>
            </View>

            <View style={stylemotoristas.div}>
              <Image className='w-10 h-10 ml-7' source={require("../assets/images/perfil.png")} />
              <View style={{flexDirection:'column', marginVertical: '2%'}}>
                <Text style={stylemotoristas.TxtNome}>Nome</Text>
                <Text style={stylemotoristas.TxtTruck}>Tipo caminhão - Marca</Text>
                <Text style={stylemotoristas.TxtPlaca}>Placa</Text>
              </View>
              <TouchableOpacity style={stylemotoristas.ButtonPerfil} 
              onPress={ () => navigation.navigate({name: 'perfil'} as never)}>
                <Text style={stylemotoristas.TxtButton}>Perfil</Text>
              </TouchableOpacity>
            </View>

            <View style={stylemotoristas.div}>
              <Image className='w-10 h-10 ml-7' source={require("../assets/images/perfil.png")} />
              <View style={{flexDirection:'column', marginVertical: '2%'}}>
                <Text style={stylemotoristas.TxtNome}>Nome</Text>
                <Text style={stylemotoristas.TxtTruck}>Tipo caminhão - Marca</Text>
                <Text style={stylemotoristas.TxtPlaca}>Placa</Text>
              </View>
              <TouchableOpacity style={stylemotoristas.ButtonPerfil} 
              onPress={ () => navigation.navigate({name: 'perfil'} as never)}>
                <Text style={stylemotoristas.TxtButton}>Perfil</Text>
              </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
        </KeyboardAvoidingView>
  );
};

const stylemotoristas = StyleSheet.create({
  ContainerMotoristas:{
    flex: 1,
  },
  div:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 35,
    marginTop: '3%',
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
});

