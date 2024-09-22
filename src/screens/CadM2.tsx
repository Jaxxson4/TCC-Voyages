import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import CheckBox from 'expo-checkbox';
import { styles } from '../styles/styles';
import React from 'react';
import { useState } from 'react';

export default function CadMotorista() {
    const [selectedTrucks, setSelectedTrucks] = useState<string[]>([]); // Armazena os tipos de caminhões selecionados
  
    const handleCheckBoxChange = (truckType: string) => {
      if (selectedTrucks.includes(truckType)) {
        // Se já estiver selecionado, remove o caminhão do array
        setSelectedTrucks(selectedTrucks.filter((item) => item !== truckType));
      } else {
        // Caso contrário, adiciona o caminhão ao array
        setSelectedTrucks([...selectedTrucks, truckType]);
      }
    };
  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
          <ImageBackground
            source={require('../assets/images/bg-white.png')}
            style={styles.bkgd}
          >
            <View className="bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
              <Pressable className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center">
                <Ionicons title="home" size={33} style={{ color: 'white' }} />
              </Pressable>
            </View>
  
            <View style={styles.txtcad2}>
              <Text style={styles.Text_cad1}>Cadastro</Text>
              <Text style={styles.Text_cad2}>Motorista</Text>
            </View>
  
            <View style={styles.txt2}>
              <Text style={styles.texto2}>Insira os dados do caminhão</Text>
            </View>
  
            <View style={styles.CadMimputes2}>
              <TextInput
                style={styles.inputCadM2}
                placeholder="Placa do caminhão"
                autoCorrect={false}
                onChangeText={() => {}}
              />
  
              <TextInput
                style={styles.inputCadM2}
                placeholder="Número do chassi"
                autoCorrect={false}
                onChangeText={() => {}}
              />
  
              <TextInput
                style={styles.inputCadM2}
                placeholder="Modelo"
                autoCorrect={false}
                onChangeText={() => {}}
              />
  
              <TextInput
                style={styles.inputCadM2}
                placeholder="Marca"
                autoCorrect={false}
                onChangeText={() => {}}
              />
  
              <View style={styles.txtt2}>
                <Text style={styles.text2}>Qual o tipo do seu caminhão:</Text>
              </View>
              <View style={styles.containerpai}>
                <View style={styles.container2}>
                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('VUC')}
                      onValueChange={() => handleCheckBoxChange('VUC')}
                    />
                    <Text>VUC</Text>
                  </View>
                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Carreta')}
                      onValueChange={() => handleCheckBoxChange('Carreta')}
                    />
                    <Text>Carreta</Text>
                  </View>
                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('SemiPesado')}
                      onValueChange={() => handleCheckBoxChange('SemiPesado')}
                    />
                    <Text>Semi-pesado</Text>
                  </View>
                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Bitrem')}
                      onValueChange={() => handleCheckBoxChange('Bitrem')}
                    />
                    <Text>Bitrem</Text>
                  </View>
                  <View style={styles.row}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Pesado')}
                      onValueChange={() => handleCheckBoxChange('Pesado')}
                    />
                    <Text>Pesado</Text>
                  </View>
                </View>
                <View style={styles.container22}>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Tanque')}
                      onValueChange={() => handleCheckBoxChange('Tanque')}
                    />
                    <Text>Tanque</Text>
                  </View>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Basculante')}
                      onValueChange={() => handleCheckBoxChange('Basculante')}
                    />
                    <Text>Basculante</Text>
                  </View>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Rodotrem')}
                      onValueChange={() => handleCheckBoxChange('Rodotrem')}
                    />
                    <Text>Rodotrem</Text>
                  </View>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Tritrem')}
                      onValueChange={() => handleCheckBoxChange('Tritrem')}
                    />
                    <Text>Tritrem</Text>
                  </View>
                  <View style={styles.column}>
                    <CheckBox
                      style={styles.checkbox}
                      color="#163D89"
                      value={selectedTrucks.includes('Cegonha')}
                      onValueChange={() => handleCheckBoxChange('Cegonha')}
                    />
                    <Text>Cegonha</Text>
                  </View>
                </View>
              </View>
            </View>
  
            <View style={styles.BtnsDad}>
              <TouchableOpacity style={styles.BtnPagAnterior} activeOpacity={0.6}>
                <Text style={styles.BtnAnteriorTxt}>Página anterior</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.BtnConfirmar} activeOpacity={0.6}>
                <Text style={styles.BtnConfirmarTxt}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  
  