import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, Image, TouchableOpacity, View, Pressable, ScrollView, Platform, StatusBar, Linking } from 'react-native';
import { stylesContrat } from '../styles/stylesContrat';
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
        </View>

        <TouchableOpacity style={{flexDirection:'row',}} onPress={ () => navigation.navigate({name: 'Divulgação'} as never)}>
        <Image className='w-7 h-7 ml-7 mt-5' source={require("../assets/images/mais.png")} />
        <Text style={{marginTop:'5%', marginLeft:'2%', fontSize:15, color: '#BCBCBC', fontWeight:'700',}}>Divulgar outra carga</Text>
        </TouchableOpacity>
<View style={stylesContrat.container}>
    {/* Card 1 - Semente para Aves */}
            <View style={stylesContrat.card}>
                <Text style={stylesContrat.title}>Semente para aves</Text>
                <Text style={stylesContrat.subtitle}>Fernanda Lima</Text>
                <Text style={stylesContrat.description}>Descrição: 
                    <Text style={{flexDirection:'row', fontWeight:'400', color:'#000'}}> 45 sacos de sementes variadas para aves, pesando 40kg cada</Text>
                </Text>

                <View style={stylesContrat.infoContainer}>
                        <Text style={stylesContrat.infoTitle}>Carregamento</Text>
                        <Text style={stylesContrat.infoText}>Rua Tenente Souza, nº 802, Jacareí, SP - 12280-222</Text>
                </View>

                <View style={stylesContrat.infoContainer}>
                        <Text style={stylesContrat.infoTitle}>Descarregamento</Text>
                        <Text style={stylesContrat.infoText}>Avenida da Saudade, nº 213, Caçapava, SP - 12280-432</Text>
                </View>

                <View style={stylesContrat.infoContainer}>
                        <Text style={stylesContrat.infoTitle}>Realizar a retirada</Text>
                        <Text style={stylesContrat.infoText}>23/07/2024</Text>
                </View>
            </View>
  
  {/* Card 2 - Semente de Plantio */}
            <View style={stylesContrat.card}>
                <Text style={stylesContrat.title}>Semente de plantio</Text>
                <Text style={stylesContrat.subtitle}>Fernanda Lima</Text>
                <Text style={stylesContrat.description}>Descrição: 
                    <Text style={{flexDirection:'row', fontWeight:'400', color:'#000'}}> 45 sacos de sementes variadas para aves, pesando 40kg cada</Text>
                </Text>            
                <View style={stylesContrat.infoContainer}>
                    <Text style={stylesContrat.infoTitle}>Carregamento</Text>
                    <Text style={stylesContrat.infoText}>Rua Jorge Bem Jor, nº 82, São Paulo, SP - 12280-111</Text>
                </View>

                <View style={stylesContrat.infoContainer}>
                    <Text style={stylesContrat.infoTitle}>Descarregamento</Text>
                    <Text style={stylesContrat.infoText}>Rua Benedito da Silva, nº 131, Brasília, DF - 12612-432</Text>
                </View>

                <View style={stylesContrat.infoContainer}>
                    <Text style={stylesContrat.infoTitle}>Realizar a retirada</Text>
                    <Text style={stylesContrat.infoText}>12/10/2024</Text>
                </View>
            </View>

            <View style={stylesContrat.card}>
                <Text style={stylesContrat.title}>Semente de plantio</Text>
                <Text style={stylesContrat.subtitle}>Fernanda Lima</Text>
                <Text style={stylesContrat.description}>Descrição: 
                    <Text style={{flexDirection:'row', fontWeight:'400', color:'#000'}}> 45 sacos de sementes variadas para aves, pesando 40kg cada</Text>
                </Text>            
                <View style={stylesContrat.infoContainer}>
                    <Text style={stylesContrat.infoTitle}>Carregamento</Text>
                    <Text style={stylesContrat.infoText}>Rua Jorge Bem Jor, nº 82, São Paulo, SP - 12280-111</Text>
                </View>

                <View style={stylesContrat.infoContainer}>
                    <Text style={stylesContrat.infoTitle}>Descarregamento</Text>
                    <Text style={stylesContrat.infoText}>Rua Benedito da Silva, nº 131, Brasília, DF - 12612-432</Text>
                </View>

                <View style={stylesContrat.infoContainer}>
                    <Text style={stylesContrat.infoTitle}>Realizar a retirada</Text>
                    <Text style={stylesContrat.infoText}>12/10/2024</Text>
                </View>
            </View>
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
)}
