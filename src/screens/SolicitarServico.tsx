import { KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform, StatusBar, Linking } from 'react-native';
import CheckBox from 'expo-checkbox';
import { stylesContrat } from '../styles/stylesContrat';
import { useState } from 'react';
import React from 'react';
import { useNavigation } from 'expo-router';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../config/firebase';
import { Alert } from "react-native";

export default function SolicitarServico(){
  const handleLinkPress = () => {
    Linking.openURL('https://raquelagostini4.wixsite.com/meusite');
  };
  const navigation = useNavigation()

  const [isChecked, setChecked] = useState(false);

  function setSelectedLanguages(selected: any, arg1: any) {
  throw new Error('Function not implemented.');
  }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const [dataRetirada, setDataRetirada] = useState('');
  const [enderecoRetirada, setEnderecoRetirada] = useState('');
  const [enderecoEntrega, setEnderecoEntrega] = useState('');

  const [tipoCarga, setTipoCarga] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [peso, setPeso] = useState('');
  const [infoSeguranca, setInfoSeguranca] = useState('');

    const enviarSolicitcao = async () => {
      try{
        console.log('Solicitação')
        await addDoc(collection(db, "solicitacoes_servico"), {
          contratante: {
            nome: nome,
            email: email,
          },
          detalhesEntrega: {
            dataRetirada: dataRetirada,
            enderecoRetirada: enderecoRetirada,
            enderecoEntrega: enderecoEntrega,
          },
          carga: {
            tipoCarga: tipoCarga,
            quantidade: quantidade,
            peso: peso,
            infoSeguranca: infoSeguranca,
          },
          status: "pendente",
          data_criacao: new Date(),
        });
         Alert.alert("Sucesso", "Solicitação enviada com sucesso!");
          navigation.navigate({ name: 'Conf_Pedido' } as never); 
      } catch (error) {
        console.error("Erro ao enviar solicitação:", error);
        Alert.alert("Erro", "Não foi possível enviar a solicitação.");
      }
    }
  
  return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1}}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

        <View className=" bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">
            <TouchableOpacity 
            onPress={ () => navigation.navigate({name: 'perfil'} as never)}>
              <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 -mr-11 mt-5' />
            </TouchableOpacity>
            <Text style={{color: '#10C18D', fontSize: 24, marginLeft:'20%', marginTop:'3%', fontWeight:'500',}}
                  className='mr-44'>Solicitar serviço</Text>
        </View>

    <View>
        <View style={stylesContrat.txtservico}>
              <Text style = {stylesContrat.Txtservico_1}> 1. Dados Contratante </Text> 
    
            <View style={stylesContrat.solcimputes}>
                <TextInput
                    style={stylesContrat.inputservico}
                    placeholder='Nome completo'
                    autoCorrect={false}
                    value={nome}
                    onChangeText={setNome}/>

                <TextInput
                    style={stylesContrat.inputservico}
                    placeholder='E-mail'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}/>
            </View>
        </View>

        <View style={stylesContrat.txtservico2}>
          <Text style = {stylesContrat.Txtservico_2}> 2. Detalhes da entrega </Text>
          <Text style = {stylesContrat.Txtservico_3}> Rua, número, cidade e estado. </Text> 
              <View style={stylesContrat.solcimputes2}>
                  <TextInput
                  style={stylesContrat.inputservico2}
                  placeholder='Data para retirar a carga'
                  autoCorrect={false}
                  value={dataRetirada}
                  onChangeText={setDataRetirada}/>

                  <TextInput
                  style={stylesContrat.inputservico2}
                  placeholder='Endereço de retirada'
                  autoCorrect={false}
                  value={enderecoRetirada}
                  onChangeText={setEnderecoRetirada}/>

                  <TextInput
                  style={stylesContrat.inputservico2}
                  placeholder='Endereço de entrega'
                  autoCorrect={false}
                  value={enderecoEntrega}
                  onChangeText={setEnderecoEntrega}/>
              </View>
        </View>

        <View style={stylesContrat.Txtservico_4}>
            <Text style = {stylesContrat.Txtservico_5}> 3. Informações da carga </Text> 

            <View style={stylesContrat.solcimputes3}>
            <TextInput
                style={stylesContrat.inputservico3}
                placeholder='Tipo carga'
                autoCorrect={false}
                value={tipoCarga}
                onChangeText={setTipoCarga}/>

                <TextInput
                style={stylesContrat.inputservico3}
                placeholder='Quantidade (caso tenha)'
                autoCorrect={false}
                value={quantidade}
                onChangeText={setQuantidade}/>

                <TextInput
                style={stylesContrat.inputservico3}
                placeholder='Peso aproximadamente'
                autoCorrect={false}
                value={peso}
                onChangeText={setPeso}/>

                <TextInput
                style={stylesContrat.inputservico3}
                placeholder='Informações de segurança'
                autoCorrect={false}
                value={infoSeguranca}
                onChangeText={setInfoSeguranca}/>
              </View>
        </View>
    </View>
            <View style={stylesContrat.Termos}>
              <CheckBox style = {stylesContrat.checkbox} color = '#163D89' value = {isChecked} onValueChange = {setChecked}/>
                <Text style = {stylesContrat.Txtservico_7}> Li e concordo com os </Text> 
                
                <Text onPress={handleLinkPress} style={{ color: 'blue', textDecorationLine: 'underline' }}> Termos de uso </Text>  
                <Text style = {stylesContrat.Txtservico_7}>e </Text> 
            </View>                
            
            <Text onPress={handleLinkPress} 
            style={{ color: 'blue', textDecorationLine: 'underline',
                marginLeft:'22%',
                marginBottom:'15%',
             }}> Política de privacidade</Text>

                <TouchableOpacity style={stylesContrat.BtnConfirmar} activeOpacity={0.6}
                  onPress={enviarSolicitcao}>
                <Text style={stylesContrat.BtnConfirmarTxt}>Confirmar</Text>
              </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>        

    )
  }
