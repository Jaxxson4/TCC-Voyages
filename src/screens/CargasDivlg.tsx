import { KeyboardAvoidingView, Text, Image, TouchableOpacity, View, ScrollView, Platform, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { stylesContrat } from '../styles/stylesContrat';
import { collection, getDocs, query, where, deleteDoc, doc } from "firebase/firestore"; 
import { db, auth } from '../config/firebase';

interface Carga {
    id: string;    
    nome: string;
    tipoCarga: string;
    seguranca: string;
    enderecoRetirada: string;
    enderecoEntrega: string;
    dataRetirada: string;
}

export default function CargasDivulgadas() {
    const navigation = useNavigation();
    const [cargas, setCargas] = useState<Carga[]>([]);
    const user = auth.currentUser;

    useEffect(() => {
        const fetchCargas = async () => {
            if (user) {
                try {
                    const q = query(
                        collection(db, "cargasDivulgadas"),
                        //where("contratanteId", "==", user.uid)
                    );
                    const querySnapshot = await getDocs(q);
                    
                    if (querySnapshot.empty) {
                        console.log("Nenhuma carga encontrada para o contratante:", user.uid);
                    } else {
                        const cargasList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Carga));
                        console.log("Cargas encontradas:", cargasList);
                        setCargas(cargasList);
                    }
                } catch (error) {
                    console.error("Erro ao buscar cargas divulgadas:", error);
                }
            } else {
                console.log("Usuário não autenticado.");
            }
        };

        fetchCargas();
    }, [user]);

    const handleDeleteCarga = async (cargaId: string) => {
        try {
            await deleteDoc(doc(db, "cargasDivulgadas", cargaId));
            setCargas((prevCargas) => prevCargas.filter((carga) => carga.id !== cargaId));
            console.log("Carga excluída:", cargaId);
            Alert.alert("Sucesso", "Carga excluída com sucesso.");
        } catch (error) {
            console.error("Erro ao excluir a carga:", error);
            Alert.alert("Erro", "Não foi possível excluir a carga.");
        }
    };
    
    return (
        <KeyboardAvoidingView  
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} 
            style={{ flex: 1 }}
        >
            <ScrollView style={{flex: 1}} showsHorizontalScrollIndicator={false}>
                <View className="bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
                    <TouchableOpacity onPress={() => navigation.navigate({name: 'C_Princ'} as never)}>
                        <Image source={require("../assets/images/arrow-back.png")} className="w-7 h-7 ml-7 mt-5" />
                    </TouchableOpacity>
                    <Text style={{ color: '#10C18D', fontSize: 21, marginLeft:'2%', marginRight:'30%', marginTop: '3%', fontWeight: '500' }}>
                        Cargas divulgadas
                    </Text>
                </View>

                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate({name: 'Divulgação'} as never)}>
                    <Image source={require("../assets/images/mais.png")} className="w-7 h-7 ml-7 mt-5" />
                    <Text style={{ marginTop: '5%', marginLeft: '2%', fontSize: 15, color: '#BCBCBC', fontWeight: '700' }}>Divulgar outra carga</Text>
                </TouchableOpacity>

                <View style={stylesContrat.container}>
                    {cargas.map((carga) => (
                        <View key={carga.id} style={stylesContrat.card}>
                            <Text style={stylesContrat.title}>{carga.tipoCarga}</Text>
                            <Text style={stylesContrat.subtitle}>{carga.nome}</Text>
                            <Text style={stylesContrat.description}>
                                Descrição: <Text style={{ fontWeight: '400', color: '#000' }}>{carga.seguranca}</Text>
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
                            <TouchableOpacity 
                                onPress={() => handleDeleteCarga(carga.id)} 
                                style={{ marginTop: 10, backgroundColor: '#FF6347', padding: 8, borderRadius: 5 }}
                            >
                                <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
