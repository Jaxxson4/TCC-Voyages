import { Image, KeyboardAvoidingView, StyleSheet, Text, Alert, TouchableOpacity, View, ScrollView, Platform } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function M_Princ() {
  const navigation = useNavigation();

  const handleChatPress = useCallback(() => {
    Alert.alert('Ainda em desenvolvimento :)');
  }, []);

  const handleLogoutPress = useCallback(() => {
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
            routes: [{ name: 'loging' } as never] // Redireciona para a tela de login
          })
        }
      ],
      { cancelable: false }
    );
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      // Evita re-renderizações desnecessárias ao entrar na tela
      return () => {
        // Qualquer limpeza necessária ao sair da tela
      };
    }, [])
  );

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
            <Image className="w-8 h-8" source={require('../assets/images/sair.png')} />
          </TouchableOpacity>

          <View>
            <Text style={{ fontSize: 25 }} className="font-bold text-green"> VOYAGES </Text>
          </View>

          <TouchableOpacity 
            className="ml-5 w-20 h-14 rounded-full flex justify-center items-center"
            onPress={() => navigation.navigate({ name: 'MNotific' } as never)}
            style={{ marginLeft: '-5%', marginRight: '5%' }}
          >
            <Feather name="bell" size={30} style={{ color: 'white' }} />
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonsOptions}>
          <View style={styles.btn} className="ml-3">
            <TouchableOpacity 
              style={styles.Button}
              onPress={() => navigation.navigate({ name: 'Trajetos' } as never)}
            >
              <Image className="w-10 h-10" source={require('../assets/images/rota.png')} />
            </TouchableOpacity>
            <Text style={styles.txtbuttons}>Trajetos</Text>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity 
              style={styles.Button}
              onPress={() => navigation.navigate({ name: 'M_Pagamento' } as never)}
            >
              <Image className="w-9 h-9" source={require('../assets/images/pagamento.png')} />
            </TouchableOpacity>
            <Text style={styles.txtbuttons}>Pagamentos</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.LineDivisoria} />

          <View style={styles.Cards}>
            <View style={styles.CardDivulgar}>
              <TouchableOpacity 
                style={styles.Divulgar} 
                activeOpacity={0.6}
                onPress={() => navigation.navigate({ name: 'Cargas_M' } as never)}
              >
                <Text style={styles.DivulgarTxt}>Cargas divulgadas</Text>
                <Image 
                  source={require('../assets/images/Caminh_2.png')}
                  className="w-32 h-32"
                  style={styles.ImagTruck2}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.LineDivisoria} />
          <View>
            <Text className="mt-8" style={styles.header}>Cargas já entregues</Text>
          </View>          
          
          <View style={{ justifyContent: 'center', marginLeft: 19 }}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Entrega exemplo</Text>
                <Text style={styles.cardDate}>21/04/2024</Text>
              </View>
              <View style={styles.cardBody}>
                <Ionicons name="person" size={16} color="#666" />
                <Text style={styles.boldText}> Motorista</Text>
                <Text style={styles.infoText}> Veículo</Text>
              </View>
              <Text style={styles.locationText}>
                Local: Rua Exemplo, 123, Bairro, Caçapava - SP
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.paidText}>Pago</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Entrega exemplo</Text>
                <Text style={styles.cardDate}>21/04/2024</Text>
              </View>
              <View style={styles.cardBody}>
                <Ionicons name="person" size={16} color="#666" />
                <Text style={styles.boldText}> Motorista</Text>
                <Text style={styles.infoText}> Veículo</Text>
              </View>
              <Text style={styles.locationText}>
                Local: Rua Exemplo, 123, Bairro, São Paulo - SP
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.paidText}>Pago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


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
    LineDivisoria:{
        marginTop: '8%',
        width: '100%',
        height: 2,
        backgroundColor: '#E1E1E1', // Azul
        marginHorizontal: 5,
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

    Cards:{
      justifyContent: 'center',
      alignItems:'center',
      marginTop:'5%',
      gap: 25,
    },

    CardDivulgar:{
      backgroundColor:'#DEDEDE',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,

  },
  Divulgar:{
      alignItems:'center',
  },
  DivulgarTxt:{
      fontSize: 17,
      fontWeight: '400',
  },
  ImagTruck2:{
      marginLeft:'10%',
      marginTop:'5%',
  },
    ButtonsOptions: {
      marginTop:'5%',
      marginBottom:'-5%',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      gap: 40,
      marginLeft: '3%'
    },
    Button: {
      marginRight: '1%',
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