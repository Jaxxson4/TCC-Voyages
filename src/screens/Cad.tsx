import {ImageBackground,KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Platform, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { styles } from '../styles/styles';
import { useState } from 'react';

export default function Cad(){
  const [mood, setMood] = useState("")

  return(
    <KeyboardAvoidingView  
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
    style={{ flex: 1}}>

    <ScrollView style={{flex: 1}}
    showsHorizontalScrollIndicator={false}>

    <ImageBackground
      source={require('../assets/images/bg-white.png')}
      style={styles.bkgd}>

        <View className=" bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <Pressable className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center ">
              <Ionicons title="home" size={33} style={{ color: 'white' }}></Ionicons>
            </Pressable>
        </View>
        
        <View style={styles.Cadwelcome}>
            <Text style={styles.cadwelco}>Cadastro</Text>
            <Text style={styles.txtwelcome}>Seja bem vindo, crie uma conta</Text>
        </View>

        <View style={styles.Cadwelcome2}>
            <Text style={styles.txtwelcome}>Escolha uma opção. Você é:</Text>

            <View style={styles.wrapper}>
            {['Contratante', 'Motorista'].map(Usuario =>(

                <View 
                key={Usuario} 
                style={styles.mood}>

                  <Text style={styles.Usuario}>{Usuario}</Text>
                  <TouchableOpacity style={styles.outter}
                  onPress={()=> setMood(Usuario)}>
                    
                    { mood === Usuario && <View style={styles.inner}/>} 

                  </TouchableOpacity>

                </View>
              ))}
                </View>
              
                <View style={styles.viewContinuar}>
                    <TouchableOpacity
                        style={styles.buttonContinuar}
                        activeOpacity={0.6}>
                        <Text style={styles.txtContinuar}>Continuar</Text>
                    </TouchableOpacity>
                </View>
        </View>

    </ImageBackground>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}



/*  <Stack>
       <Stack.Screen name='login' options={{ title: 'Login' }}/>
    </Stack>  */