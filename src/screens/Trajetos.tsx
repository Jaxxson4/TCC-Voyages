import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ScrollView, StyleSheet, Platform, KeyboardAvoidingView, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp, onSnapshot, query, orderBy, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { Feather } from '@expo/vector-icons';
// Definindo a interface para o tipo Update
interface Update {
  id: string;
  description: string;
  timestamp: Timestamp | null;
}

export default function Trajetos() {
  const navigation = useNavigation();

  const [updateText, setUpdateText] = useState('');
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    // Escutar as atualizações em tempo real
    const q = query(collection(db, 'trajetos'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUpdates(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Update))); // Usamos 'as Update' para garantir que o TypeScript entenda o tipo dos dados.
    });

    return unsubscribe; // Remove o listener ao sair
  }, []);

  const handleUpdateSend = async () => {
    if (updateText) {
      await addDoc(collection(db, 'trajetos'), {
        description: updateText,
        timestamp: serverTimestamp()
      });
      setUpdateText('');
    }
  };

  const handleDeleteUpdate = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'trajetos', id));
      Alert.alert("Atualização removida", "A atualização foi excluída com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir a atualização.");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
      <View className=" bg-blue-III h-28 shadow-slate-300 items-center justify-between flex-row">
            <TouchableOpacity 
            onPress={ () => navigation.navigate({name: 'M_Princ'} as never)}>
              <Image source={require("../assets/images/arrow-back.png")} 
                    className='w-7 h-7 ml-7 -mr-11 mt-5' />
            </TouchableOpacity>
            <Text style={{color: '#10C18D', fontSize: 24, marginTop:'3%' ,fontWeight:'500',}}
                  className='mr-72'>Trajetos</Text>
        </View>
        <View style={styles.container}>
        
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{marginBottom: '6%', fontSize: 15, justifyContent: 'center', alignItems: 'center', padding: 10}}>
            <Image source={require("../assets/images/sinal-de-aviso.png")} className='ml-10' style={{marginRight:'2%'}}/>
            <Text style={{marginLeft: '5%', fontWeight: 'bold', color: '#10C18D', fontSize: 18}}> AVISO: </Text> 
            <Text>Você deverá atualizar o contratante <Text style={{fontWeight: 'bold'}}>apenas</Text> nas paradas do trajeto do serviço!</Text>
          </Text>
          </View>

          <View style={styles.updateList}>
            {updates.map((update) => (
              <View key={update.id} style={styles.updateItem}>
                <View>
                <Text style={styles.date}>
                  {update.timestamp ? new Date(update.timestamp.toDate()).toLocaleDateString() : 'Data indisponível'}
                </Text>
                <Text style={styles.time}>
                  {update.timestamp ? new Date(update.timestamp.toDate()).toLocaleTimeString() : 'Hora indisponível'}
                </Text>
                <Text style={styles.description}>{update.description}</Text>
                </View>
                    <View style={{padding: 10}}>
                        <TouchableOpacity onPress={() => handleDeleteUpdate(update.id)}>
                        <Feather name="trash-2" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
              </View>
            ))}
          </View>
          <TextInput
            style={styles.input}
            placeholder='Nova atualização'
            value={updateText}
            onChangeText={setUpdateText}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateSend}>
            <Text style={styles.buttonText}>Enviar Atualização</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateList: {
    marginBottom: 16,
    padding: 20
  },
  updateItem: {
    marginBottom: '10%',
    flexDirection: 'row',
  },
  date: {
    color: 'grey',
  },
  time: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#163D89',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
