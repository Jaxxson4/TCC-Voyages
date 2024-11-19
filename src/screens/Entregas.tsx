import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, TextInput } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from 'expo-router';
import Clipboard from '@react-native-clipboard/clipboard';

const navigation = useNavigation() 

export default function Entregas (){
    const [imageUri, setImageUri] = useState<string | null>(null);
  
    const handleSelectImage = () => {
      launchImageLibrary(
        {
          mediaType: 'photo', // Definindo diretamente o tipo de mídia como 'photo'
          quality: 1, // Qualidade da imagem
        },
        (response) => {
          if (response.didCancel) {
            console.log('Seleção de imagem cancelada pelo usuário.');
          } else if (response.errorMessage) {
            console.log('Erro ao selecionar imagem: ', response.errorMessage);
          } else if (response.assets && response.assets.length > 0) {
            setImageUri(response.assets[0].uri || null);
          }
        }
      );
    };  

  const handleCopyToClipboard = () => {
    Clipboard.setString('joaom@gmail.com');
    alert('Chave Pix copiada!');


  return (
    <View style={styles.container}>
      {/* Status de entrega */}
      <Text style={styles.title}>Entrega concluída ✔</Text>
      <Text style={styles.text}>Carga: Exemplo de carga</Text>
      <Text style={styles.text}>Entrega: Caçapava - SP</Text>
      <Text style={styles.text}>Motorista: João</Text>
      <Text style={styles.text}>Placa: "AK47I1J"</Text>
      <Text style={[styles.text, styles.price]}>Valor do serviço: R$ 1.000</Text>

      {/* Pagamento no Pix */}
      <Text style={styles.sectionTitle}>Pagamento no Pix</Text>
      {/* Chave Pix */}
      <View style={styles.pixContainer}>
        <TextInput
          style={styles.pixKey}
          value="Chave do motorista: joaom@gmail.com"
          editable={false}
        />
        <TouchableOpacity style={styles.copyButton} onPress={handleCopyToClipboard}>
          <Text style={styles.copyButtonText}>Copiar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}}

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
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
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
    backgroundColor: '#34C759',
    padding: 10,
    borderRadius: 10,
  },
  copyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
