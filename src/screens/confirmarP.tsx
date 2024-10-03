import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform, StatusBar, Linking } from 'react-native';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import React from 'react';

export default function ConfirmarPedido(){
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
                    className='w-7 h-7 ml-7 -mr-11 mt-5' />
            </TouchableOpacity>
            <Text style={{color: '#10C18D', fontSize: 24, marginLeft:'20%', marginTop:'3%', fontWeight:'500',}}
                  className='mr-44'>Solicitar serviço</Text>
        </View>

        <View style = {styles.paidetodos}>

            <Text style={styles.title}>Pedido feito por</Text>
            <Text style={styles.subtitle}>Fernanda Lima de Alcântara</Text>
            <Text style={styles.subtitle2}>fernands00@gmail.com</Text>

            <Text style={styles.title2}>Local de entrega</Text>
            <Text style={styles.subtitle3}>Data de retirada</Text>
            <Text style={styles.subtitle4}>27/04/2024</Text>

            <Text style={styles.subtitle5}>Retirada</Text>
            <Text style={styles.subtitle6}>Rua Tenente Souza, nº 802 , Jacareí, SP - 12280-222 </Text>

            <Text style={styles.subtitle7}>Descarregamento</Text>
            <Text style={styles.subtitle8}>Avenida da Saudade, nº 213 , Caçapava, SP - 12280-432 </Text>

            <Text style={styles.title3}>Carga</Text>
            <Text style={styles.subtitle9}>Tipo de carga</Text>
            <Text style={styles.subtitle10}>Semente para aves</Text>

            <Text style={styles.subtitle11}>Descarregamento</Text>
            <Text style={styles.subtitle12}>Peso: 1,8 toneladas</Text>

            <Text style={styles.subtitle13}>Descrição</Text>
            <Text style={styles.subtitle14}>Descrição: 45 sacos de sementes para aves, pesando 40kg cada </Text>

            <Text style={styles.subtitle15}>Informações de segurança</Text>
            <Text style={styles.subtitle16}>Ernesto, ao carregar e descarregar, manusele os sacos com cuidado para evitar rasgos ou danos. 
                                            Se houver sinais de danos aos sacos me informe Imediatamente. 
                                            Ao chegar ao destino, descarregue com cuidado e confirme a quantidade de sacos </Text>

            <TouchableOpacity style={styles.BtnConcluir} activeOpacity={0.6}
            onPress={() => navigation.navigate ({name: 'C_Princ'} as never)}>
                <Text style={styles.BtnConcluirTxt}>Concluir</Text>
            </TouchableOpacity>


    </View>
    </ScrollView>
    </KeyboardAvoidingView>

)}   

const styles =  StyleSheet.create ({ 

paidetodos: {
    flex: 1,
    marginLeft: '16%',
    marginTop: '20%',
    marginBottom:'6%',
},
title: {
    color: '#113164',
    marginTop: '20%',
    fontSize: 30,
    fontWeight: '600',
},
subtitle: {
    color: '#113164',
    marginTop: '9%',
    fontSize: 18,
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
    marginTop: '20%',
    fontSize: 30,
    fontWeight: '600',
},
subtitle3: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
subtitle4: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
subtitle5: {
    color: '#113164',
    marginTop: '9%',
    fontSize: 18,
    fontWeight: '600',
},
subtitle6: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
subtitle7: {
    color: '#113164',
    marginTop: '9%',
    fontSize: 18,
    fontWeight: '600',
},
subtitle8: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
title3: {
    color: '#113164',
    marginTop: '20%',
    fontSize: 30,
    fontWeight: '600',
},
subtitle9: {
    color: '#113164',
    marginTop: '9%',
    fontSize: 18,
    fontWeight: '600',
},
subtitle10: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
subtitle11: {
    color: '#113164',
    marginTop: '9%',
    fontSize: 18,
    fontWeight: '600',
},
subtitle12: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
subtitle13: {
    color: '#113164',
    marginTop: '9%',
    fontSize: 18,
    fontWeight: '600',
},
subtitle14: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
subtitle15: {
    color: '#113164',
    marginTop: '9%',
    fontSize: 18,
    fontWeight: '600',
},
subtitle16: {
    color: '#000',
    marginTop: '9%',
    fontSize: 17,
    fontWeight: '600',
},
BtnConcluir: {
    backgroundColor: '#10C18D',
    height:'12%',
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    marginTop:'20%',
    borderRadius: 50,
    marginBottom:'8%',
},
BtnConcluirTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 40,
    paddingRight: 40,
},
})