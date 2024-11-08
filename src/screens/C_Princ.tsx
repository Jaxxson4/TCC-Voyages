import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, FlatList, Dimensions, Alert, Text, TextInput, TouchableOpacity, View, Pressable, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { stylesContrat } from '../styles/stylesContrat';
import { useNavigation } from 'expo-router';
import React, { useState, useRef, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, onSnapshot, query, orderBy, DocumentData } from 'firebase/firestore';

const { width } = Dimensions.get('window');

interface Update {
  id: string;
  description: string;
  timestamp: any; // Defina o tipo corretamente
}

export default function C_Princ() {
  const navigation = useNavigation();
  const [updates, setUpdates] = useState<Update[]>([]); // Corrija o tipo aqui

  const handleChatPress = () => {
    Alert.alert('Ainda em desenvolvimento 😁');
  };

  const handleLogoutPress = () => {
    Alert.alert(
      "Confirmação de Logout",
      "Deseja mesmo sair?",
      [
        {
          text: "Não",
          onPress: () => console.log("Logout cancelado"),
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'home' } as never]
          })
        }
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    const q = query(collection(db, 'trajetos'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUpdates(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        } as Update)) // Defina o tipo de dados mapeados explicitamente
      );
    });

    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView  
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
        <View className="bg-blue-III h-32 mb shadow-slate-300 items-center justify-between flex flex-row">
          <TouchableOpacity
            className="w-16 h-16 rounded-full flex justify-center items-center"
            style={{ marginLeft: '5%', marginRight: '-5%' }}
            onPress={handleLogoutPress}
          >
            <Image className='w-8 h-8' source={require('../assets/images/sair.png')}/>
          </TouchableOpacity>

          <View><Text style={{ fontSize: 25 }} className='font-bold text-green'> VOYAGES </Text></View>

          <TouchableOpacity
            className="ml-5 w-20 h-14 rounded-full flex justify-center items-center"
            onPress={() => navigation.navigate({ name: 'MNotific' } as never)}
            style={{ marginLeft: '-5%', marginRight: '5%' }}
          >
            <Feather name="bell" size={30} style={{ color: 'white' }}></Feather>
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonsOptions}>
              <View style={styles.btn}>
              <TouchableOpacity style={styles.Button}
              onPress={handleChatPress}>
                <Image className='w-9 h-9' source={require('../assets/images/conversas.png')}/>
              </TouchableOpacity>
              <Text style={styles.txtbuttons}>Chat</Text>
              </View>
          

              <View style={styles.btn}>
                <TouchableOpacity style={styles.Button}
                onPress={ () => navigation.navigate({name: 'CargasD'} as never)}>
                <Image className='w-10 h-10' source={require('../assets/images/caminhao-de-entrega.png')}/>
                </TouchableOpacity>
                <Text style={styles.txtbuttons}>Cargas</Text>
              </View>

              <View style={styles.btn}>
                <TouchableOpacity style={styles.Button}
                onPress={ () => navigation.navigate({name: 'Pagamento'} as never)}>
                <Image className='w-9 h-9' source={require('../assets/images/pagamento.png')}/>
                </TouchableOpacity>
                <Text style={styles.txtbuttons}>Pagamentos</Text>
              </View>
          </View>
          <View style={styles.LineDivisoria} />


          <View style={styles.container}>
          <Text style={styles.header}>Acompanhamento da entrega</Text>
          <FlatList
            horizontal
            data={updates}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.progressContainer}
            renderItem={({ item }) => (
              <View style={styles.updateItem}>
                <Text style={styles.date}>{new Date(item.timestamp.toDate()).toLocaleDateString()}</Text>
                <Text style={styles.time}>{new Date(item.timestamp.toDate()).toLocaleTimeString()}</Text>
                <Text style={styles.label}>{item.description}</Text>
                <Image source={require('../assets/images/verdadeiro.png')} style={styles.imageButton} />
              </View>
            )}
            ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma atualização disponível</Text>}
          />


        <View style={styles.LineDivisoria} />

        <View style={stylesContrat.Cards}>
            <View style={stylesContrat.CardBuscar}>

                <TouchableOpacity style={stylesContrat.BuscarM} activeOpacity={0.6}
                onPress={ () => navigation.navigate({name: 'Motoristas'} as never)}>

                    <Text style={stylesContrat.BuscarTxt}>Buscar motoristas</Text>

                    <Image  source={require('../assets/images/Caminh_1.png')} 
                            className='w-32 h-32'
                            style={stylesContrat.ImagTruck1} />
                </TouchableOpacity>
            </View>



            <View style={stylesContrat.CardDivulgar}>

                <TouchableOpacity style={stylesContrat.Divulgar} activeOpacity={0.6}
                onPress={ () => navigation.navigate({name: 'Divulgação'} as never)}>

                    <Text style={stylesContrat.DivulgarTxt}>Divulgar carga</Text>

                    <Image  source={require('../assets/images/Caminh_2.png')}
                            className='w-32 h-32'
                            style={stylesContrat.ImagTruck2} />
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.LineDivisoria} />
        
        <View>
          <Text className='mt-8' style={styles.header} >Cargas já entregues</Text>
        </View>

      <View style={{justifyContent:'center', marginLeft: 19}}>
             {/* Primeiro cartão */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Entrega de Terra</Text>
            <Text style={styles.cardDate}>21/04/2023</Text>
          </View>
          <View style={styles.cardBody}>
            <Ionicons name="person" size={16} color="#666" />
            <Text style={styles.boldText}> Felipe Braga</Text>
            <Text style={styles.infoText}> Caminhão Basculante</Text>
          </View>
          <Text style={styles.locationText}>
            Local: Rua João Alves, nº 334, Pinheiros, São Paulo - SP
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.paidText}>Pago</Text>
          
          </View>
        </View>

        {/* Segundo cartão */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Entrega de Cimento</Text>
            <Text style={styles.cardDate}>17/05/2023</Text>
          </View>
          <View style={styles.cardBody}>
            <Ionicons name="person" size={16} color="#666" />
      
            <Text style={styles.boldText}> Paulo A.</Text>
            <Text style={styles.infoText}> Caminhão Semi-Pesado</Text>
          </View>
          <Text style={styles.locationText}>
            Local: Rua Fernando Pinho, nº 1003, Bela Vista, São Paulo - SP
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.paidText}>Pago</Text>
          </View>
        </View>
      </View>
    </View>
</ScrollView>
</KeyboardAvoidingView>
)}


const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      paddingHorizontal: 10,
    },
    header: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 20,
      marginLeft:'3%',
      color: '#10C18D', // Verde
    },

    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    updateList: {
      marginBottom: 14,
      flexDirection: 'row',
      alignItems: 'center',
    },
    
    updateItem: {
      marginBottom: 7,
      marginHorizontal: '1%',
      alignItems: 'center',
      backgroundColor: '#EBEBEB',
      padding: 10,
      paddingVertical: 5,
      marginVertical: '3%',
      borderRadius: 10,
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      elevation: 5,
    },

    item: {
      backgroundColor: '#EBEBEB',
      padding: 12,
      width:'20%',
      marginVertical: '3%',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      elevation: 5,
    },
    emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
    imageButton: {
      width: 30, // Ajuste o tamanho da imagem conforme necessário
      height: 30,
      marginBottom: 8,
      marginTop:'10%',
    },
    line: {
      width: 40,
      height: 2,
      backgroundColor: '#113164', // Azul
      marginHorizontal: 5,
    },
    LineDivisoria:{
        marginTop: '8%',
        width: '100%',
        height: 2,
        backgroundColor: '#E1E1E1', // Azul
        marginHorizontal: 5,
    },
    label: {
      fontSize: 13,
      fontWeight:'500',
      color: '#113164',
      textAlign: 'center',
    },
    date: {
      fontSize: 11,
      color: '#666',
      textAlign: 'center',
    },
    time: {
      fontSize: 11,
      color: '#666',
      textAlign: 'center',
    },
    icon: {
      marginLeft: 10,
    },


    card: {
      backgroundColor: '#E1E1E1',
      borderRadius: 10,
      marginTop:'5%',
      maxWidth:'96%',
      padding: 15,
      marginBottom: '10%',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    cardDate: {
      fontSize: 12,
      color: '#999',
    },
    cardBody: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    boldText: {
      fontWeight: 'bold',
      color: '#333',
      marginLeft: 5,
    },
    infoText: {
      color: '#163D89',
      marginLeft: 10,
      fontWeight:'500',
    },
    locationText: {
      fontSize: 12,
      color: '#666',
      marginTop: 5,
    },
    cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    paidText: {
      color: '#10C18D',
      fontWeight: 'bold',
    },

    ButtonsOptions: {
      marginTop:'5%',
      marginBottom:'-5%',
      marginLeft: '4%',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      gap: 45,
    },
    Button: {
      backgroundColor:'#E0E0E0',
      alignItems:'center',
      padding: 13,
      borderRadius: 100,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      elevation: 5,
    },
    btn: {
      display:'flex',
      alignItems:'center',
    },
    txtbuttons: {
      fontSize: 15,
      fontWeight: '500',
      marginTop:'10%',
      color:'#10C18D',
    },
  });