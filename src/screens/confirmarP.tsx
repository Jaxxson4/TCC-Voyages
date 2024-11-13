import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform } from 'react-native';
import { useNavigation } from 'expo-router';
import { useState, useEffect } from 'react';
import React from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function ConfirmarPedido() {
    const navigation = useNavigation();

    // Estados para armazenar os dados recuperados
    const [solicitacao, setSolicitacao] = useState({
        nome: '',
        email: '',
        dataRetirada: '',
        enderecoRetirada: '',
        enderecoEntrega: '',
        tipoCarga: '',
        quantidade: '',
        peso: '',
        infoSeguranca: '',
    });

    // Função para buscar os dados da solicitação de serviço no Firestore
    useEffect(() => {
        const fetchSolicitacao = async () => {
            try {
                const docRef = doc(db, 'solicitacoes_servico', 'ID_DA_SOLICITACAO'); // Substitua 'ID_DA_SOLICITACAO' pelo ID correto
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setSolicitacao({
                        nome: data.contratante.nome,
                        email: data.contratante.email,
                        dataRetirada: data.detalhesEntrega.dataRetirada,
                        enderecoRetirada: data.detalhesEntrega.enderecoRetirada,
                        enderecoEntrega: data.detalhesEntrega.enderecoEntrega,
                        tipoCarga: data.carga.tipoCarga,
                        quantidade: data.carga.quantidade,
                        peso: data.carga.peso,
                        infoSeguranca: data.carga.infoSeguranca,
                    });
                } else {
                    console.log("Nenhuma solicitação encontrada.");
                }
            } catch (error) {
                console.error("Erro ao buscar solicitação:", error);
            }
        };

        fetchSolicitacao();
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })}
            style={{ flex: 1 }}
        >
            <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
                <View className=" bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">
                    <TouchableOpacity onPress={() => navigation.navigate({ name: 'Sol_Servico' } as never)}>
                        <Image source={require("../assets/images/arrow-back.png")} className='w-7 h-7 ml-7 -mr-11 mt-5' />
                    </TouchableOpacity>
                    <Text style={{ color: '#10C18D', fontSize: 24, marginRight: '34%', marginTop: '3%', fontWeight: '500' }}>Confirmar pedido</Text>
                </View>

                <View style={styles.paidetodos}>
                    <Text style={styles.title}>Pedido feito por</Text>
                    <Text style={styles.subtitle}>{solicitacao.nome}</Text>
                    <Text style={styles.subtitle}>{solicitacao.email}</Text>

                    <Text style={styles.title}>Local de entrega</Text>
                    <Text style={styles.subtitle3}>Data de retirada</Text>
                    <Text style={styles.subtitle}>{solicitacao.dataRetirada}</Text>

                    <Text style={styles.subtitle3}>Retirada</Text>
                    <Text style={styles.subtitle}>{solicitacao.enderecoRetirada}</Text>

                    <Text style={styles.subtitle3}>Descarregamento</Text>
                    <Text style={styles.subtitle}>{solicitacao.enderecoEntrega}</Text>

                    <Text style={styles.title}>Carga</Text>
                    <Text style={styles.subtitle3}>Tipo de carga</Text>
                    <Text style={styles.subtitle}>{solicitacao.tipoCarga}</Text>

                    <Text style={styles.subtitle3}>Quantidade</Text>
                    <Text style={styles.subtitle}>{solicitacao.quantidade}</Text>

                    <Text style={styles.subtitle3}>Peso</Text>
                    <Text style={styles.subtitle}>{solicitacao.peso}</Text>

                    <Text style={styles.subtitle3}>Informações de segurança</Text>
                    <Text style={styles.subtitle}>{solicitacao.infoSeguranca}</Text>

                    <TouchableOpacity style={styles.ButtonPerfil} onPress={() => navigation.navigate({ name: 'C_Princ' } as never)}>
                        <Text style={styles.TxtButton}>Concluir</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
const styles =  StyleSheet.create ({ 

paidetodos: {
    flex: 1,
    marginLeft: '10%',
    marginBottom:'6%',
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
    maxWidth:'90%'
},
title2: {
    color: '#113164',
    marginTop: '20%',
    fontSize: 30,
    fontWeight: '600',
},
subtitle3: {
    color: '#163D89',
    marginTop: '5%',
    fontSize: 17,
    fontWeight: '500',
},
ButtonPerfil:{
    backgroundColor:'#10C18D',
    marginVertical: '3%',
    marginLeft: '60%',
    marginTop:'20%',
    borderRadius: 40,
    height: 40,
    width: 110,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: 'center',
  }, 
  TxtButton:{
    fontSize: 17,
    fontWeight:'500',
    color:'#FFF',
  },
})