import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform, StatusBar, Linking, ViewBase } from 'react-native';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import React from 'react';

export default function MNotific(){
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
            onPress={ () => navigation.navigate({name: 'M_Princ'} as never)}>
              <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 mt-5' />
            </TouchableOpacity>
            <Text 
            style={{color: '#10C18D', fontSize: 24, marginRight:'48%', marginTop:'3%', fontWeight:'500',}}
            >Notificações</Text>
        </View>


        <View style={styles.Notifications}>
            <View style={styles.EntregaConluida}>
                <Image source={require("../assets/images/true.png")}/>
                <Text style={styles.Text_Entregas} >Entrega concluída</Text>
            </View>
        </View>
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
})