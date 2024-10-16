import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, KeyboardAvoidingView, ScrollView, StyleSheet, Button, TextInput, Clipboard } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from 'expo-router';

export default function PagEntregas(){
    const navigation = useNavigation()
    const [imageUri, setImageUri] = useState<string | null>(null);

    return(
      <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

      <View className=" bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">

            <TouchableOpacity 
            onPress={ () => navigation.navigate({name: 'Pagamento'} as never)}>
              <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 -mr-11 mt-5' />
            </TouchableOpacity>
            <Text 
            style={{color: '#10C18D', fontSize: 24,marginRight:'50%', marginTop:'3%', fontWeight:'500',}}
            >Pagamentos</Text>
      </View>

        <View style={styles.container}>

            
        {/* Status de entrega */}
        <Text style={styles.title}>Entrega concluída <Image source={require('../assets/images/true.png')}/></Text>
        <Text style={styles.subtitle}>Relatório do serviço</Text>
        <Text style={styles.text}>Carga: <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '400'}}>xxxxxxxx</Text></Text>
        <Text style={styles.text}>Entrega: <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '400'}}>xxxxxxxx</Text></Text>
        <Text style={styles.text}>Motorista: <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '400'}}>xxxxxxxx</Text></Text>
        <Text style={styles.text}>Placa: <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '400'}}>xxxxxxxx</Text></Text>
        <Text style={styles.text}>Valor total do serviço: <Text style={{color: '#10C18D', fontWeight: 'bold',}}>R$ 1.170</Text></Text>
  
        {/* Pagamento no Pix */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.sectionTitle}>Pagamento no Pix</Text>
        <Text style={{color: 'grey', justifyContent: 'center', alignItems: 'center', fontSize: 15}}>Escaneie este QR code ou copie a chave do pix motorista</Text>
        <Text style={styles.textBold}>OBS: É obrigatório o envio do comprovante de pagamento para o motorista</Text>
        </View>
        {/* Upload de comprovante */}
        <TouchableOpacity style={styles.uploadContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <Text style={styles.uploadText}>Colar comprovante</Text>
          )}
        </TouchableOpacity>
  
        {/* Chave Pix */}
        <View style={styles.pixContainer}>
          <TextInput
            style={styles.pixKey}
            value="Chave do motorista: joaopaulo2@gmail.com"
            editable={false}
          />
          <TouchableOpacity style={styles.copyButton} >
            <Text style={styles.copyButtonText}>Copiar</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F8F8F8',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#0056FF',
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 5,
      color: '#163D89',
    },
    text: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold',
    },
    price: {
      color: '#10C18D',
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: '#163D89'
    },
    textBold: {
      fontWeight: 'bold',
      marginBottom: 10,
    },
    uploadContainer: {
      height: 150,
      borderWidth: 1,
      borderColor: '#C0C0C0',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F0F0F0',
      marginBottom: 20,
    },
    uploadText: {
      color: '#888',
      fontSize: 16,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    pixContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    pixKey: {
      borderWidth: 1,
      borderColor: '#C0C0C0',
      borderRadius: 10,
      padding: 10,
      flex: 1,
      marginRight: 10,
      backgroundColor: '#FFF',
    },
    copyButton: {
      backgroundColor: '#10C18D',
      padding: 10,
      borderRadius: 10,
    },
    copyButtonText: {
      color: '#FFF',
      fontWeight: 'bold',
    },
  });
  