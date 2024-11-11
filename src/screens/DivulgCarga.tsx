import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, ScrollView, Platform, Alert } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { useNavigation } from 'expo-router';
import { stylesContrat } from '../styles/stylesContrat';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../config/firebase';

const db = getFirestore(app);

export default function DivulgarCargas() {
  const navigation = useNavigation();
  
  // Estados para armazenar os dados de entrada
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataRetirada, setDataRetirada] = useState('');
  const [enderecoRetirada, setEnderecoRetirada] = useState('');
  const [enderecoEntrega, setEnderecoEntrega] = useState('');
  const [tipoCarga, setTipoCarga] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [peso, setPeso] = useState('');
  const [seguranca, setSeguranca] = useState('');

  const handleDivulgarCarga = async () => {
    try {
      // Criação de um documento na coleção "cargasDivulgadas"
      await addDoc(collection(db, "cargasDivulgadas"), {
        nome,
        email,
        dataRetirada,
        enderecoRetirada,
        enderecoEntrega,
        tipoCarga,
        quantidade,
        peso,
        seguranca,
        criadoEm: new Date(),
      });

      Alert.alert("Sucesso", "Carga divulgada com sucesso!");
      navigation.navigate({ name: 'CargasD' } as never); // Redireciona para a tela de cargas divulgadas
    } catch (error) {
      console.error("Erro ao divulgar a carga: ", error);
      Alert.alert("Erro", "Não foi possível divulgar a carga.");
    }
  };

  return (
    <KeyboardAvoidingView  
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} 
      style={{ flex: 1 }}
    >
      <ScrollView style={{flex: 1}} showsHorizontalScrollIndicator={false}>
        <View className="bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">
          <TouchableOpacity onPress={() => navigation.navigate({ name: 'C_Princ' } as never)}>
            <Image source={require("../assets/images/arrow-back.png")} className='w-7 h-7 ml-7 -mr-11 mt-5' />
          </TouchableOpacity>
          <Text style={{ color: '#10C18D', fontSize: 24, marginLeft: '20%', marginTop: '3%', fontWeight: '500' }} className='mr-44'>
            Divulgar carga
          </Text>
        </View>

        {/* Formulário de dados */}
        <View style={stylesContrat.txtservico}>
          <Text style={stylesContrat.Txtservico_1}>1. Dados Contratante</Text> 
          <View style={stylesContrat.solcimputes}>
            <TextInput style={stylesContrat.inputservico} placeholder='Nome completo' value={nome} onChangeText={setNome} />
            <TextInput style={stylesContrat.inputservico} placeholder='E-mail' value={email} onChangeText={setEmail} />
          </View>
        </View>

        <View style={stylesContrat.txtservico2}>
          <Text style={stylesContrat.Txtservico_2}>2. Detalhes da entrega</Text>
          <Text style={stylesContrat.Txtservico_3}>Rua, número, cidade e estado.</Text> 
          <View style={stylesContrat.solcimputes2}>
            <TextInput style={stylesContrat.inputservico2} placeholder='Data para retirar a carga' value={dataRetirada} onChangeText={setDataRetirada} />
            <TextInput style={stylesContrat.inputservico2} placeholder='Endereço de retirada' value={enderecoRetirada} onChangeText={setEnderecoRetirada} />
            <TextInput style={stylesContrat.inputservico2} placeholder='Endereço de entrega' value={enderecoEntrega} onChangeText={setEnderecoEntrega} />
          </View>
        </View>

        <View style={stylesContrat.Txtservico_4}>
          <Text style={stylesContrat.Txtservico_5}>3. Informações da carga</Text> 
          <View style={stylesContrat.solcimputes3}>
            <TextInput style={stylesContrat.inputservico3} placeholder='Tipo carga' value={tipoCarga} onChangeText={setTipoCarga} />
            <TextInput style={stylesContrat.inputservico3} placeholder='Quantidade (caso tenha)' value={quantidade} onChangeText={setQuantidade} />
            <TextInput style={stylesContrat.inputservico3} placeholder='Peso aproximadamente' value={peso} onChangeText={setPeso} />
            <TextInput style={stylesContrat.inputservico3} placeholder='Informações de segurança' value={seguranca} onChangeText={setSeguranca} />
          </View>
        </View>

        <TouchableOpacity onPress={handleDivulgarCarga} style={stylesContrat.BtnConfirmar} activeOpacity={0.6}>
          <Text style={stylesContrat.BtnConfirmarTxt}>Divulgar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
