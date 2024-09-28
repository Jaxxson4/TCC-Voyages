import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { stylesContrat } from '../styles/stylesContrat';
import { useNavigation } from 'expo-router';
import React from 'react';
  
export default function M_Princ(){
  const navigation = useNavigation()

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
      
        {/* Primeiro ponto */}
        

        <View style={styles.LineDivisoria} />


        <View style={stylesContrat.Cards}>
            <View style={stylesContrat.CardBuscar}>

                <TouchableOpacity style={stylesContrat.BuscarM} activeOpacity={0.6}
                onPress={ () => navigation.navigate({name: 'Motoristas'} as never)}>
                    <Text style={stylesContrat.BuscarTxt}>Buscar motoristas</Text>
                    <Image  source={require('../assets/images/Caminh_1.png')} 
                            className='w-32 h-32'
                            style={stylesContrat.ImagTruck1} />
                </TouchableOpacity>
            </View>



            <View style={stylesContrat.CardDivulgar}>

                <TouchableOpacity style={stylesContrat.Divulgar} activeOpacity={0.6}
                onPress={ () => navigation.navigate({name: 'Divulgação'} as never)}>
                    <Text style={stylesContrat.DivulgarTxt}>Divulgar carga</Text>
                    <Image  source={require('../assets/images/Caminh_2.png')}
                            className='w-32 h-32'
                            style={stylesContrat.ImagTruck2} />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.LineDivisoria} />
        
        <View>
          <Text className='mt-8' style={styles.header} >Cargas já entregues</Text>
        </View>

      <View style={{justifyContent:'center', marginLeft: 19}}>
             {/* Primeiro cartão */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Entrega de Terra - 11 m³</Text>
            <Text style={styles.cardDate}>21/04/2023</Text>
          </View>
          <View style={styles.cardBody}>
            <Ionicons name="person" size={16} color="#666" />
            <Text style={styles.boldText}> Felipe Braga</Text>
            <Text style={styles.infoText}> Caminhão Basculante</Text>
          </View>
          <Text style={styles.locationText}>
            Local: Rua João Alves, nº 334, Pinheiros, São Paulo - SP
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.paidText}>Pago</Text>
          
          </View>
        </View>

        {/* Segundo cartão */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Entrega de Cimento</Text>
            <Text style={styles.cardDate}>17/05/2023</Text>
          </View>
          <View style={styles.cardBody}>
            <Ionicons name="person" size={16} color="#666" />
            <Text style={styles.boldText}> Paulo A.</Text>
            <Text style={styles.infoText}> Caminhão Semi-Pesado</Text>
          </View>
          <Text style={styles.locationText}>
            Local: Rua Fernando Pinho, nº 1003, Bela Vista, São Paulo - SP
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.paidText}>Pago</Text>
          </View>
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
      backgroundColor:'#E1E1E1',
      padding: 12,
      width:'20%',
      paddingVertical: 13,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageButton: {
      width: 30, // Ajuste o tamanho da imagem conforme necessário
      height: 30,
      marginBottom: 8,
      marginTop:'10%',
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


    card: {
      backgroundColor: '#E1E1E1',
      borderRadius: 10,
      marginTop:'5%',
      maxWidth:'96%',
      padding: 15,
      marginBottom: '10%',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    cardDate: {
      fontSize: 12,
      color: '#999',
    },
    cardBody: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    boldText: {
      fontWeight: 'bold',
      color: '#333',
      marginLeft: 5,
    },
    infoText: {
      color: '#163D89',
      marginLeft: 10,
      fontWeight:'500',
    },
    locationText: {
      fontSize: 12,
      color: '#666',
      marginTop: 5,
    },
    cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    paidText: {
      color: '#10C18D',
      fontWeight: 'bold',
    },
  });