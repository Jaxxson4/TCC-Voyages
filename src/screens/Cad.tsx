import {ImageBackground,KeyboardAvoidingView, StyleSheet, Text, Image, TextInput, View, TouchableOpacity, Pressable, Platform, ScrollView, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from 'expo-router';
import { styles } from '../styles/styles';
import { useState } from 'react';

export default function Cad(){
  const [mood, setMood] = useState("")
  const navigation = useNavigation()

  const [selectedOption, setSelectedOption] = useState(null); // Estado para a opção selecionada

    const handleConfirm = () => {
      if (selectedOption === 'Contratante') {
        navigation.navigate({name:'CadContratante'} as never); // Navegar para a tela de Cadastro Contratante
      } else if (selectedOption === 'Motorista') {
        navigation.navigate({name:'CadMotorista'} as never); // Navegar para a tela de Cadastro Motorista
      }
    }
    
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
            <TouchableOpacity className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center "
            onPress={ () => navigation.navigate({name: 'home'} as never)}>

            <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 mt-5' />
            </TouchableOpacity>
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
                        onPress={ () => navigation.navigate({name: 'CadMotorista'} as never)}
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