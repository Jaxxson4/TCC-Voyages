import { Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View, Platform } from 'react-native';
import { stylesContrat } from '../styles/stylesContrat';
import { useState, useEffect } from 'react';
import { useNavigation } from 'expo-router';
import React from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../config/firebase';

interface Carga {
    id: string;
    tipoCarga: string;
    nomeContratante: string;
    descricao: string;
    enderecoRetirada: string;
    enderecoEntrega: string;
    dataRetirada: string;
}

export default function Cargas_M() {
    const navigation = useNavigation();
    const [cargas, setCargas] = useState<Carga[]>([]); // Define o tipo do estado

    useEffect(() => {
        const fetchCargas = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "cargasDivulgadas"));
                const cargasList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Carga[]; // Tipagem explícita

                setCargas(cargasList);
            } catch (error) {
                console.error("Erro ao buscar cargas divulgadas:", error);
            }
        };

        fetchCargas();
    }, []);

    return (
        <KeyboardAvoidingView  
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} 
            style={{ flex: 1 }}
        >
            <ScrollView style={{flex: 1}} showsHorizontalScrollIndicator={false}>
                <View className="bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
                    <TouchableOpacity
                        onPress={() => navigation.navigate({ name: 'M_Princ' } as never)}
                    >
                        <Image source={require("../assets/images/arrow-back.png")} className="w-7 h-7 ml-7 mt-5" />
                    </TouchableOpacity>
                    <Text style={{ color: '#10C18D', fontSize: 21, fontWeight: '500', marginLeft: '8%', marginTop: '3%' }}>
                        Cargas divulgadas
                    </Text>
                </View>

                <View style={stylesContrat.container}>
                    {cargas.map((carga) => (
                        <View key={carga.id} style={stylesContrat.card}>
                            <Text style={stylesContrat.title}>{carga.tipoCarga}</Text>
                            <Text style={stylesContrat.subtitle}>{carga.nomeContratante}</Text>
                            <Text style={stylesContrat.description}>
                                Descrição: <Text style={{ fontWeight: '400', color: '#000' }}>{carga.descricao}</Text>
                            </Text>
                            <View style={stylesContrat.infoContainer}>
                                <Text style={stylesContrat.infoTitle}>Carregamento</Text>
                                <Text style={stylesContrat.infoText}>{carga.enderecoRetirada}</Text>
                            </View>
                            <View style={stylesContrat.infoContainer}>
                                <Text style={stylesContrat.infoTitle}>Descarregamento</Text>
                                <Text style={stylesContrat.infoText}>{carga.enderecoEntrega}</Text>
                            </View>
                            <View style={stylesContrat.infoContainer}>
                                <Text style={stylesContrat.infoTitle}>Realizar a retirada</Text>
                                <Text style={stylesContrat.infoText}>{carga.dataRetirada}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
