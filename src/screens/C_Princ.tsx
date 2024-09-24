import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { stylesContrat } from '../styles/stylesContrat';
import { useNavigation } from 'expo-router';
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

            <Pressable className="w-20 h-16 rounded-full flex justify-center items-center ">
                <Ionicons name="menu" size={33} style={{ color: 'white' }}></Ionicons>
            </Pressable>

            <View><Text style={{fontSize:25}} className='font-bold text-green'> VOYAGES </Text></View>

            <Pressable className="ml-5 w-20 h-14 rounded-full flex justify-center items-center ">
                <Feather name="bell" size={30} style={{ color: 'white' }}></Feather>
            </Pressable>
        </View>

    <View style={styles.container}>
      <Text style={styles.header}>Acompanhamento da entrega</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.progressContainer}
      >
        {/* Primeiro ponto */}
        <View style={styles.item}>
          <Text style={styles.label}>Pedido feito</Text>
          <Text style={styles.date}>12/03/2024</Text>
          <Text style={styles.time}>12:36</Text>
          <View style={styles.circle} />

        </View>

        {/* Linha de conexão */}
        <View style={styles.line} />

        {/* Segundo ponto */}
        <View style={styles.item}>
          <Text style={styles.label}>Carga carregada</Text>
          <Text style={styles.date}>14/03/2024</Text>
          <Text style={styles.time}>16:21</Text>
          <View style={styles.circle} />

        </View>

        {/* Linha de conexão */}
        <View style={styles.line} />

        {/* Terceiro ponto */}
        <View style={styles.item}>
          <Text style={styles.label}>Sua carga saiu para entrega</Text>
          <Text style={styles.date}>14/03/2024</Text>
          <Text style={styles.time}>17:12</Text>
          <View style={styles.circle} />
        </View>

        {/* Linha de conexão */}
        <View style={styles.line} />

        {/* Quarto ponto */}
        <View style={styles.item}>
          <Text style={styles.label}>Sua carga passou pelo Km. 114</Text>
          <Text style={styles.date}>Rod. Carvalho Pinto</Text>
          <Text style={styles.time}>15/03/2024 - 01:43</Text>          
          <View style={styles.circle} />

        </View>

        {/* Próximo item */}
        </ScrollView>

        <View style={styles.LineDivisoria} />


        <View style={stylesContrat.Cards}>
            <View style={stylesContrat.CardBuscar}>

                <TouchableOpacity style={stylesContrat.BuscarM} activeOpacity={0.6}>
                    <Text style={stylesContrat.BuscarTxt}>Buscar motoristas</Text>
                    <Image  source={require('../assets/images/Caminh_1.png')} 
                            className='w-32 h-32'
                            style={stylesContrat.ImagTruck1} />
                </TouchableOpacity>
            </View>
            <View style={stylesContrat.CardDivulgar}>

                <TouchableOpacity style={stylesContrat.Divulgar} activeOpacity={0.6}>
                    <Text style={stylesContrat.DivulgarTxt}>Buscar motoristas</Text>
                    <Image  source={require('../assets/images/Caminh_2.png')}
                            className='w-32 h-32'
                            style={stylesContrat.ImagTruck2} />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.LineDivisoria} />

            <View>
                <View>
                    <Text>Cargas já estregues</Text>
                </View>
            </View>
    </View>
</ScrollView>
</KeyboardAvoidingView>
)}


const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      paddingHorizontal: 10,
    },
    header: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 20,
      marginLeft:'3%',
      color: '#10C18D', // Verde
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    item: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#113164', // Azul
      marginBottom: 5,
    },
    line: {
      width: 40,
      height: 2,
      backgroundColor: '#113164', // Azul
      marginHorizontal: 5,
    },
    LineDivisoria:{
        marginTop: '8%',
        width: '100%',
        height: 2,
        backgroundColor: '#E1E1E1', // Azul
        marginHorizontal: 5,
    },
    label: {
      fontSize: 13,
      fontWeight:'500',
      color: '#113164',
      textAlign: 'center',
    },
    date: {
      fontSize: 11,
      color: '#666',
      textAlign: 'center',
    },
    time: {
      fontSize: 11,
      color: '#666',
      textAlign: 'center',
    },
    icon: {
      marginLeft: 10,
    },
  });