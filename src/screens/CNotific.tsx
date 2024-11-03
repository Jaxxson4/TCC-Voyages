import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform, FlatList } from 'react-native';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { onSnapshot, query, where, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { getAuth } from 'firebase/auth';

// Definição de tipos
interface Solicitacao {
    id: string;
    tipoCarga: string;
    status: string;
    motorista_id: string; // Adicione outras propriedades que você precisar
}

export default function CNotific() {
    const navigation = useNavigation();
    const [solicitacoes, setSolicitacoes] = useState<Solicitacao[]>([]);
    const auth = getAuth();
    const usuarioId = auth.currentUser?.uid;

    useEffect(() => {
        if (!usuarioId) return;

        const q = query(
            collection(db, "solicitacoes_servico"),
            where("motorista_id", "==", usuarioId) // Aqui você pode ajustar conforme a necessidade
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          console.log('SOlicitação');
            const novasSolicitacoes: Solicitacao[] = [];
            querySnapshot.forEach((doc) => {
                novasSolicitacoes.push({ id: doc.id, ...doc.data() } as Solicitacao);
            });
            setSolicitacoes(novasSolicitacoes);
        });

        return () => unsubscribe();
    }, [usuarioId]);

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


                <FlatList
                    data={solicitacoes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.Notifications}>
                            <View style={styles.div}>
                                <Image className='w-10 h-10 ml-7' source={require("../assets/images/perfil.png")} />
                                <View style={{ flexDirection: 'column', marginVertical: '2%' }}>
                                    <Text style={styles.TxtNome}>{item.tipoCarga}</Text>
                                    <Text>Status: {item.status}</Text>
                                </View>
                                <TouchableOpacity style={styles.ButtonPerfil} onPress={() => navigation.navigate({ name: 'Pedidos' } as never)}>
                                    <Text style={styles.TxtButton}>Ver mais</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    Notifications: {
        margin: '8%',
    },
    div: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
        marginTop: '3%',
        marginLeft: '2%',
    },
    TxtNome: {
        fontSize: 17,
        fontWeight: '600',
    },
    ButtonPerfil: {
        backgroundColor: '#10C18D',
        marginVertical: '3%',
        marginRight: '5%',
        borderRadius: 40,
        height: 30,
        width: 100,
        justifyContent: "center",
        alignItems: 'center',
    },
    TxtButton: {
        fontSize: 17,
        fontWeight: '500',
        color: '#FFF',
    },
});
