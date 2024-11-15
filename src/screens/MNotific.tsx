import React, { useEffect, useState } from 'react';
import { FlatList, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, Alert, View, Platform, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { onSnapshot, query, where, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { getAuth } from 'firebase/auth';

interface Notificacao {
    id: string;
    tipoCarga: string;
    status: string;
    motorista_id: string;
}

export default function MNotific() {
    const navigation = useNavigation();
    const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
    const auth = getAuth();
    const usuarioId = auth.currentUser?.uid;
    
    useEffect(() => {
        if (!usuarioId) return;

        const q = query(
            collection(db, "solicitacoes_servico"),
            where("motorista_id", "==", usuarioId)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const novasNotificacoes: Notificacao[] = [];
            querySnapshot.forEach((doc) => {
                novasNotificacoes.push({ id: doc.id, ...doc.data() } as Notificacao);
            });
            console.log("Notificações carregadas:", novasNotificacoes); // Verifique o conteúdo aqui
            setNotificacoes(novasNotificacoes);
        });

        return () => unsubscribe();
    }, [usuarioId]);

    const responderSolicitacao = async (solicitacaoId: string, status: string) => {
        try {
            const solicitacaoRef = doc(db, "solicitacoes_servico", solicitacaoId);
            await updateDoc(solicitacaoRef, { status });
            Alert.alert(`Serviço ${status === "aceito" ? "aceito" : "recusado"} com sucesso!`);
        } catch (error) {
            console.error("Erro ao atualizar solicitação:", error);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })}
            style={{ flex: 1 }}
        >
            <View className=" bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
                    <TouchableOpacity className="w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center "
                    onPress={() => navigation.navigate({name: 'M_Princ'} as never)}>
                        <Image source={require("../assets/images/arrow-back.png")} className='w-7 h-7 ml-7 mt-5' />
                    </TouchableOpacity>
                    <Text style={{color: '#10C18D', fontSize: 22, marginLeft:'8%', marginTop:'3%', fontWeight:'600',}}
                  className='mr-52'>Notificações</Text>
            </View>
            <View>
                <View style={styles.Notifications}>
                        <View style={styles.div}>
                            <View style={styles.notificationDetails}>
                                <Text style={styles.TxtNome}><Text style={{color: '#163D89'}}>Solicitação:</Text> <Text style={{color: '#666'}}>Carga de exemplo</Text></Text>
                            </View>
                            <TouchableOpacity
                                style={styles.ButtonPerfil}
                                onPress={() => navigation.navigate('Pedidos' as never)}>
                                <Text style={styles.TxtButton}>Ver mais</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
            </View>
            {/*
            <FlatList
                data={notificacoes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.Notifications}>
                        <View style={styles.div}>
                            <Image style={styles.profileImage} source={require("../assets/images/perfil.png")} />
                            <View style={styles.notificationDetails}>
                                <Text style={styles.TxtNome}>Tipo de carga: {item.tipoCarga}</Text>
                                <Text>Status: {item.status}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.ButtonPerfil}
                                onPress={() => navigation.navigate('Pedidos' as never)}>
                                <Text style={styles.TxtButton}>Ver mais</Text>
                            </TouchableOpacity>
                        </View>

                        {item.status === "pendente" && (
                            <View style={styles.actionButtons}>
                                <Button title="Aceitar" onPress={() => responderSolicitacao(item.id, "aceito")} />
                                <Button title="Recusar" onPress={() => responderSolicitacao(item.id, "recusado")} />
                            </View>
                        )}
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma notificação de pedido de serviço disponível.</Text>}
            />
            */}

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0A74DA',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    backButton: {
        position: 'absolute',
        left: 16,
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    title: {
        color: '#10C18D',
        fontSize: 22,
        fontWeight: '600',
    },
    Notifications: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    div: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        marginRight: 16,
    },
    notificationDetails: {
        flex: 1,
        marginLeft: '5%',
    },
    TxtNome: {
        fontSize: 17,
        fontWeight: '600',
    },
    ButtonPerfil: {
        backgroundColor: '#10C18D',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
        marginRight: '5%',
    },
    TxtButton: {
        color: '#FFF',
        fontSize: 16,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#666',
    },
});
