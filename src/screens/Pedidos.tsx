import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Platform } from 'react-native';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import React from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Importe o Firebase
import { db } from '../config/firebase';

export default function Pedidos() {
  const navigation = useNavigation();
  const [mood, setMood] = useState(""); // Estado para controlar a seleção do radio button
  const [serviceValue, setServiceValue] = useState(""); // Estado para o valor do serviço

  const handleEnviar = async () => {
    if (mood === 'Sim' && serviceValue) {
      try {
        // Adicionando um novo documento na coleção 'servicos'
        await addDoc(collection(db, 'servicos'), {
          mood,
          serviceValue,
          createdAt: new Date(), // Salvando a data de criação
        });
  
        // Navegar após o envio
        navigation.navigate({ name: 'M_Princ' } as never);
      } catch (error) {
        console.error("Erro ao salvar no Firebase:", error); // Exibe qualquer erro no console
      }
    } else {
      alert("Por favor, insira o valor do serviço.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
        <View className="bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">
          <TouchableOpacity onPress={() => navigation.navigate({ name: 'MNotific' } as never)}>
            <Image source={require("../assets/images/arrow-back.png")} className='w-7 h-7 ml-7 -mr-11 mt-5' />
          </TouchableOpacity>
          <Text
            style={{ color: '#10C18D', fontSize: 24, marginRight: '34%', marginTop: '3%', fontWeight: '500' }}
          >
            Pedidos de serviço
          </Text>
        </View>

        <View style={styles.paidetodos}>
          <Text style={styles.title}>Pedido feito por</Text>
          <Text style={styles.subtitle}>Contratante</Text>
          <Text style={styles.subtitle}>emailcontratante@gmail.com</Text>

          <Text style={styles.title}>Local de entrega</Text>
          <Text style={styles.subtitle3}>Data de retirada</Text>
          <Text style={styles.subtitle}>11/12/2024</Text>

          <Text style={styles.subtitle3}>Retirada</Text>
          <Text style={styles.subtitle}>Rua, 111, Bairro, Cidade</Text>

          <Text style={styles.subtitle3}>Descarregamento</Text>
          <Text style={styles.subtitle}>Rua, 222, Bairro, Cidade</Text>

          <Text style={styles.title}>Carga</Text>
          <Text style={styles.subtitle3}>Tipo de carga</Text>
          <Text style={styles.subtitle}>Carga exemplo</Text>

          <Text style={styles.subtitle3}>Descrição</Text>
          <Text style={styles.subtitle}>Produto do contratante</Text>

          <Text style={styles.subtitle3}>Informações de segurança</Text>
          <Text style={styles.subtitle}>Dados sobre a carga exemplo</Text>
          <View style={{ height: 2, width: '90%', marginTop: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: "#BCBCBC" }} />

          <View>
            <Text style={styles.Aceitar}>Aceitar pedido</Text>
            <View style={{ flexDirection: 'row', gap: 100, marginLeft: '17%' }}>
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

            {/* Caixa de texto para inserir valor do serviço */}
            {mood === 'Sim' && (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Digite o valor do serviço"
                  value={serviceValue}
                  onChangeText={setServiceValue} // Atualiza o estado com o valor digitado
                  keyboardType="numeric" // Só permite números
                />
              </View>
            )}
          </View>
          <TouchableOpacity style={styles.ButtonPerfil} onPress={handleEnviar}>
            <Text style={styles.TxtButton}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  paidetodos: {
    flex: 1,
    marginLeft: '10%',
    marginBottom: '6%',
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
    maxWidth: '90%',
  },
  subtitle3: {
    color: '#163D89',
    marginTop: '5%',
    fontSize: 17,
    fontWeight: '500',
  },
  ButtonPerfil: {
    backgroundColor: '#10C18D',
    marginVertical: '3%',
    marginLeft: '60%',
    marginTop: '20%',
    borderRadius: 40,
    height: 40,
    width: 110,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: 'center',
  },
  TxtButton: {
    fontSize: 17,
    fontWeight: '500',
    color: '#FFF',
  },
  Aceitar: {
    fontSize: 22,
    color: '#10C18D',
    marginTop: 15,
    fontWeight: '600',
  },
  mood: {
    flexDirection: 'row',
    gap: 8,
    marginTop: '5%',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '8%',
    marginLeft: '-20%',
  },
  outter: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: 18,
    height: 18,
    backgroundColor: '#475c86',
    borderRadius: 10,
  },
  Usuario: {
    fontSize: 18,
    textTransform: 'capitalize',
    color: '#163D89',
    fontWeight: '400',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});
