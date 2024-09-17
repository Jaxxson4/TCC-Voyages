import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { stylesContrat } from '../styles/styleContrat';
import React from 'react';
  
export default function C_Princ(){
    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>
          <View className=" bg-blue-III h-32 mb shadow-slate-300 items-center justify-between flex flex-row">

            <Pressable className="w-14 h-14 rounded-full flex justify-center items-center ">
                <Ionicons name="menu" size={33} style={{ color: 'white' }}></Ionicons>
            </Pressable>

            <View><Text style={{fontSize:25}} className='font-bold text-green'> VOYAGES </Text></View>

            <Pressable className="ml-5 w-14 h-14 rounded-full flex justify-center items-center ">
                <Feather name="bell" size={30} style={{ color: 'white' }}></Feather>
            </Pressable>
        </View>

        <View style={stylesContrat.Cards}>
            <View>
                <TouchableOpacity>
                    <Text>Buscar motoristas</Text>
                    <Image source={require('../assets/images/Caminh_1.png')} className='w-72 h-72' />
                    </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>Divulgar entrega</Text>
                    <Image source={require('../assets/images/Caminh_2.png')} className='w-72 h-72' />
                    </TouchableOpacity>
            </View>
        </View>

        </ScrollView>
        </KeyboardAvoidingView>

)}