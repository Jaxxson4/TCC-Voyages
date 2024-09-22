import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Stack } from 'expo-router';
import { styles } from '../styles/styles';
import React from 'react';

export default function CadMotorista(){
    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
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

            <View style={styles.txtcad}>
              <Text style = {styles.Text_1}> Cadastro </Text> 
              <Text style = {styles.Text_2}> Motorista </Text>
            </View>

            <View style={styles.CadMimputes}>
            <TextInput
                style={styles.inputCadM}
                placeholder='Nome completo'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

            <TextInput
                style={styles.inputCadM}
                placeholder='Data de Nascimento'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

            <TextInput
                style={styles.inputCadM}
                placeholder='CPF'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={styles.inputCadM}
                placeholder='CNH'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={styles.inputCadM}
                placeholder='Email'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>

                <TextInput
                style={styles.inputCadM}
                placeholder='Senha'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>
        </View>

            <View style={styles.txtPag}>
              <Text style = {styles.Pagamento}> Dados para receber o pagamento </Text> 
            </View>

              <View style={styles.Cad_imputes}>
            <TextInput
                style={styles.input_CadM}
                placeholder='Chave Pix'
                autoCorrect={false}//pro corretor não funcionar
                onChangeText={() => {}}/>
            </View>

              <View style={styles.ProximoBtn}>
                    <TouchableOpacity
                        style={styles.BtnProx}
                        activeOpacity={0.6}>
                        <Text style={styles.BtnProxTxt}>Próximo</Text>
                    </TouchableOpacity>
                </View>
              
            </ImageBackground>
            </ScrollView>
            </KeyboardAvoidingView>

        )}