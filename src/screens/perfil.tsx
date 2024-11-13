import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Pressable, ScrollView, Platform, StatusBar, Linking, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../config/firebase';

interface Motorista {
    id: string;
    name: string;
    dateOfBirth: string;
    placa: string;
    selectedTrucks: string;
    marca: string;
    modelo: string;
    email: string;
    chavePix: string;
}

interface PerfilMotoristaProps{
    route: { params: { motoristaId: string } };
}

export default function PerfilMotorista({route}:PerfilMotoristaProps) {
    const navigation = useNavigation();
    const [motorista, setMotorista] = useState<Motorista | null>(null);
    const user = auth.currentUser;

    const motoristaId = route.params?.motoristaId;
  
    useEffect(() => {
      const fetchMotorista = async () => {
        try {
          const q = query(
            collection(db, "Motorista"),
            where("id", "==", motoristaId) 
          );
          
          const querySnapshot = await getDocs(q);
          
          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            const motoristaData = doc.data() as Omit<Motorista, 'id'>;
            setMotorista({ id: doc.id, ...motoristaData });
          } else {
            console.log("Motorista não encontrado.");
          }
        } catch (error) {
          console.error("Erro ao buscar dados do motorista:", error);
        }
      };
  
      if (motoristaId) fetchMotorista();
    }, [motoristaId]);
    

    return (
        <KeyboardAvoidingView  
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })}
            style={{ flex: 1 }}
        >
            <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
                <View className="bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
                    <TouchableOpacity className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center"
                        onPress={() => navigation.navigate({ name: 'Motoristas' } as never)}>
                        <Image className='w-7 h-7 ml-7 mt-5' source={require("../assets/images/arrow-back.png")} />
                    </TouchableOpacity>
                    <Text style={{ color: '#10C18D', fontSize: 21, marginLeft: '8%', marginTop: '3%', fontWeight: '500' }} className='mr-44'>Perfil motorista</Text>
                </View>


{/*
            <View>
                    {motorista ? (
                    <>
                    <View style={styles.container}>
                        <Image className='w-20 h-20 ml-3 mr-3' style={styles.img} source={require("../assets/images/homem.png")} />
                        <View>
                            <Text style={{ fontSize: 23 }}>Motorista</Text>
                            <Text style={styles.Texto_1}>Nome: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>{motorista.name}</Text></Text>
                            <Text style={styles.Texto_1}>Idade: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>{motorista.dateOfBirth}</Text></Text>
                        </View>
                    </View>

                    <View style={styles.textos}>
                        <Text style={styles.title}>Veículo</Text>
                        <Text style={styles.Texto_1}>Placa: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>{motorista.placa}</Text></Text>
                        <Text style={styles.subtitle}>Tipo: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>{motorista.selectedTrucks}</Text></Text>
                        <Text style={styles.subtitle}>Marca: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>{motorista.marca}</Text></Text>
                        <Text style={styles.subtitle}>Modelo: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>{motorista.modelo}</Text></Text>

                        <Text style={styles.title}>Informações adicionais</Text>
                        <Text style={styles.subtitle}>Email: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>{motorista.email}</Text></Text>
                        <Text style={styles.subtitle}>Chave pix: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>{motorista.chavePix}</Text></Text>
                    </View>
                    </>
                    ) : (
                    <Text>Carregando dados do motorista...</Text>
                    )}
            </View>
*/}
                    <View style={styles.container}>
                        <Image className='w-20 h-20 ml-3 mr-3' style={styles.img} source={require("../assets/images/homem.png")} />
                        <View>
                            <Text style={{ fontSize: 23 }}>Motorista</Text>
                            <Text style={styles.Texto_1}>Nome: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>João Sérgio</Text></Text>
                            <Text style={styles.Texto_1}>Idade: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>46</Text></Text>
                        </View>
                    </View>

                    <View style={styles.textos}>
                        <Text style={styles.title}>Veículo</Text>
                        <Text style={styles.Texto_1}>Placa: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>aaaaa</Text></Text>
                        <Text style={styles.subtitle}>Tipo: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>Semi-Pesado</Text></Text>
                        <Text style={styles.subtitle}>Marca: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>Volkswagen</Text></Text>
                        <Text style={styles.subtitle}>Modelo: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>Constelation</Text></Text>

                        <Text style={styles.title}>Informações adicionais</Text>
                        <Text style={styles.subtitle}>Email: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>joaoM@gmail.com</Text></Text>
                        <Text style={styles.subtitle}>Chave pix: <Text style={{ fontSize: 15, color: '#BCBCBC' }}>12992930482</Text></Text>
                    </View>


                <TouchableOpacity style={styles.ButtonPerfil} onPress={() => navigation.navigate({ name: 'Sol_Servico' } as never)}>
                    <Text style={styles.TxtButton}>Solicitar</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: '16%',
        marginTop: '10%',
        marginBottom: '6%',
    },
    img: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Texto_1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
    },
    textos: {
        flex: 1,
        marginLeft: '16%',
        marginTop: '5%',
    },
    title: {
        color: '#163D89',
        marginTop: '8%',
        fontSize: 19,
        fontWeight: '700',
    },
    subtitle: {
        color: 'grey',
        marginTop: '5%',
        fontSize: 17,
        fontWeight: '600',
        maxWidth: '80%',
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
});
