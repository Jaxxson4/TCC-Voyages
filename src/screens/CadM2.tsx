import { ImageBackground, KeyboardAvoidingView, StyleSheet, Image, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import CheckBox from 'expo-checkbox';
import { styles } from '../styles/styles';
import React from 'react';
import { useState } from 'react';

export default function CadMotorista() {
    const navigation = useNavigation()

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


    const ChassiInput = () => {
      const [chassi, setChassi] = useState('');
    
      // Função para formatar a entrada no estilo "XXX-XXXXX-X-XX-XXXXXX"
      const formatChassi = (text:String) => {
        // Remove todos os caracteres que não sejam números ou letras
        let cleaned = text.replace(/[^A-Za-z0-9]/g, '');
    
        // Aplica a formatação "XXX-XXXXX-X-XX-XXXXXX"
        if (cleaned.length > 3) {
          cleaned = cleaned.replace(/^(.{3})(.*)/, '$1-$2');
        }
        if (cleaned.length > 9) {
          cleaned = cleaned.replace(/^(.{3})-(.{5})(.*)/, '$1-$2-$3');
        }
        if (cleaned.length > 11) {
          cleaned = cleaned.replace(/^(.{3})-(.{5})-(.{1})(.*)/, '$1-$2-$3-$4');
        }
        if (cleaned.length > 13) {
          cleaned = cleaned.replace(/^(.{3})-(.{5})-(.{1})-(.{2})(.*)/, '$1-$2-$3-$4-$5');
        }
    
        setChassi(cleaned);

      }}
  
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
        
        <View className=" bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <TouchableOpacity className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center "
            onPress={ () => navigation.navigate({name: 'Cad'} as never)}>

            <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 mt-5' />
            </TouchableOpacity>
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
                maxLength={7}
              />
  
              <TextInput
                style={styles.inputCadM2}
                placeholder="Número do chassi"
                autoCorrect={false}
                keyboardType="default"
                value={chassi}
                onChangeText={formatChassi} // Aplica a formatação sempre que o texto mudar
                maxLength={21} // Limite de caracteres total com os traços
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
              <TouchableOpacity style={styles.BtnPagAnterior} activeOpacity={0.6}
                          onPress={ () => navigation.navigate({name: 'CadMotorista'} as never)}>
                <Text style={styles.BtnAnteriorTxt}>Página anterior</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.BtnConfirmar} activeOpacity={0.6}
                          onPress={ () => navigation.navigate({name: 'C_Princ'} as never)}>{/*TELA PRINCIPAL DO MOTORISTA*/}

                <Text style={styles.BtnConfirmarTxt}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  