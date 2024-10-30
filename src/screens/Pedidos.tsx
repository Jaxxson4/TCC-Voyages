import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform, StatusBar, Linking } from 'react-native';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import React from 'react';

export default function Pedidos(){
    const navigation = useNavigation()
    const [mood, setMood] = useState(""); // Estado para controlar a seleção do radio button

    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

        <View className=" bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">
            <TouchableOpacity 
            onPress={ () => navigation.navigate({name: 'MNotific'} as never)}>
              <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 -mr-11 mt-5' />
            </TouchableOpacity>
            <Text 
            style={{color: '#10C18D', fontSize: 24,marginRight:'34%', marginTop:'3%', fontWeight:'500',}}
            >Pedidos de serviço</Text>
        </View>

        <View style = {styles.paidetodos}>

            <Text style={styles.title}>Pedido feito por</Text>
            <Text style={styles.subtitle}>xxxxxxxxxxxxxxxxxxx</Text>
            <Text style={styles.subtitle}>xxxxxxxxxxxxxxxxxxxxxxx</Text>

            <Text style={styles.title}>Local de entrega</Text>
            <Text style={styles.subtitle3}>Data de retirada</Text>
            <Text style={styles.subtitle}>xx/xx/xxxx</Text>

            <Text style={styles.subtitle3}>Retirada</Text>
            <Text style={styles.subtitle}>xxxxxxxxxxxxxxxxxxxxxxxxx</Text>

            <Text style={styles.subtitle3}>Descarregamento</Text>
            <Text style={styles.subtitle}>xxxxxxxxxxxxxxxxxxxxxxxxx</Text>

            <Text style={styles.title}>Carga</Text>
            <Text style={styles.subtitle3}>Tipo de carga</Text>
            <Text style={styles.subtitle}>xxxxxxxxxxx</Text>

            <Text style={styles.subtitle3}>Descarregamento</Text>
            <Text style={styles.subtitle}>xxxxxxxxxxx</Text>

            <Text style={styles.subtitle3}>Descrição</Text>
            <Text style={styles.subtitle}>xxxxxxxxxxxxxxxxxxx </Text>

            <Text style={styles.subtitle3}>Informações de segurança</Text>
            <Text style={styles.subtitle}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </Text>
            <View style={{height: 2, width: '90%', marginTop: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: "#BCBCBC"}}/>
            
                <View>
                    <Text style={styles.Aceitar}>Aceitar pedido</Text>
                    
                    <View style={{flexDirection: 'row', gap: 100, marginLeft: '17%'}}>
                        <View style={styles.wrapper}>
                        {['Sim'].map((Usuario) => (
                        <View key={Usuario} style={styles.mood}>
                            <Text style={styles.Usuario}>{Usuario}</Text>

                            <TouchableOpacity
                            style={styles.outter}
                            onPress={() => setMood(Usuario)} // Define a seleção
                            >
                            {mood === Usuario && <View style={styles.inner} />}
                            </TouchableOpacity>
                        </View>
                        ))}
                        </View>

                        <View style={styles.wrapper}>
                        {['Não'].map((Usuario) => (
                        <View key={Usuario} style={styles.mood}>
                            <Text style={styles.Usuario}>{Usuario}</Text>

                            <TouchableOpacity
                            style={styles.outter}
                            onPress={() => setMood(Usuario)} // Define a seleção
                            >
                            {mood === Usuario && <View style={styles.inner} />}
                            </TouchableOpacity>
                        </View>
                        ))}
                        </View>
                    </View>
            </View>
            <TouchableOpacity style={styles.ButtonPerfil} 
              onPress={ () => navigation.navigate({name: 'M_Princ'} as never)}>
                <Text style={styles.TxtButton}>Enviar</Text>
            </TouchableOpacity>

    </View>
    </ScrollView>
    </KeyboardAvoidingView>

)}   

const styles =  StyleSheet.create ({ 

paidetodos: {
    flex: 1,
    marginLeft: '10%',
    marginBottom:'6%',
},
title: {
    color: '#163D89',
    marginTop: '10%',
    fontSize: 23,
    fontWeight: '600',
},
subtitle: {
    color: '#777777',
    fontSize: 15,
    fontWeight: '500',
    maxWidth:'90%'
},
title2: {
    color: '#113164',
    marginTop: '20%',
    fontSize: 30,
    fontWeight: '600',
},
subtitle3: {
    color: '#163D89',
    marginTop: '5%',
    fontSize: 17,
    fontWeight: '500',
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
  Aceitar:{
    fontSize: 22,
    color: '#10C18D',
    marginTop: 15,
    fontWeight: '600',
  },
  mood:{
    flexDirection:'row',
    gap: 8,
    marginTop: '5%',
},
wrapper:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:'8%',
    marginLeft:'-20%',
},
outter:{
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
},

inner:{
    width: 18,
    height: 18,
    backgroundColor: '#475c86',
    borderRadius: 10,
},
Usuario:{
    fontSize: 18,
    textTransform: 'capitalize',
    color:'#163D89',
    fontWeight: '400',
},
})