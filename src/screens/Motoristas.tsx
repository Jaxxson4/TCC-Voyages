import { KeyboardAvoidingView, StyleSheet, Text, Image, FlatList,TouchableOpacity, View, ScrollView, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { db } from '../config/firebase'; // Caminho para o seu arquivo de configuração do Firebase
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function CargasDivulgadas(){
    const navigation = useNavigation()

    interface Motorista {
      id: string;
      name: string;
      email: string;
      selectedTrucks: string;
      userPlaca: string;
    }
     const [motoristas, setMotoristas] = useState<Motorista[]>([]); // Definindo o tipo do estado

  useEffect(() => {
    const fetchMotoristas = async () => {
      try {
        const q = query(collection(db, "users"), where("userType", "==", "motorista"));
        const querySnapshot = await getDocs(q);
        const motoristasList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Motorista[]; // Assegurando que os dados estão no tipo correto
        setMotoristas(motoristasList);
      } catch (error) {
        console.error("Erro ao buscar motoristas: ", error);
      }
    };

    fetchMotoristas();
  }, []);

  const renderMotorista = ({ item }: { item: Motorista }) => ( // Definindo o tipo do item
    <View style={stylemotoristas.ContainerMotoristas}>
    <View style={stylemotoristas.div}>
      <Image className='w-10 h-10 ml-7' source={require("../assets/images/perfil.png")} />
      <View style={{flexDirection:'column', marginVertical: '2%'}}>
        <Text style={stylemotoristas.TxtNome}>{item.name}</Text>
        <Text style={stylemotoristas.TxtTruck}>{item.selectedTrucks}</Text>
        <Text style={stylemotoristas.TxtPlaca}>{item.userPlaca}</Text>
      </View>
      <TouchableOpacity style={stylemotoristas.ButtonPerfil} 
      onPress={ () => navigation.navigate({name: 'perfil'} as never)}>
        <Text style={stylemotoristas.TxtButton}>Perfil</Text>
      </TouchableOpacity>
    </View>
</View>
);



    return(
        <KeyboardAvoidingView  
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })} // ajustar
        style={{ flex: 1 }}>
    
        <ScrollView style={{flex: 1}}
        showsHorizontalScrollIndicator={false}>

        <View className= " bg-blue-III h-24 shadow-slate-300 items-center justify-between flex flex-row">
            <TouchableOpacity className= "w-14 h-14 mt-9 ml-2 rounded-full flex justify-center items-center"
            onPress={ () => navigation.navigate({name: 'C_Princ'} as never)}>

            <Image className='w-7 h-7 ml-7 mt-5' source={require("../assets/images/arrow-back.png")} />
            </TouchableOpacity>
            <Text style={{color: '#10C18D', fontSize: 21, marginLeft:'8%', marginTop:'3%', fontWeight:'500',}}
                  className='mr-44'>Buscar motoristas</Text>
        </View>

        <FlatList
        data={motoristas}
        renderItem={renderMotorista}
        keyExtractor={(item) => item.id}
        />
        
        </ScrollView>
        </KeyboardAvoidingView>
  );
};

const stylemotoristas = StyleSheet.create({
  ContainerMotoristas:{
    flex: 1,
  },
  div:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
    gap: 35,
    marginTop: '3%',
  },
  TxtNome:{
    fontSize: 17,
    fontWeight:'600',
  },
  TxtTruck:{
    fontSize: 14,
    fontWeight:'500',
    color:'grey',
  },
  TxtPlaca:{
    fontSize: 14,
    fontWeight:'600',
    color:'#484848',
  }, 
  ButtonPerfil:{
    backgroundColor:'#10C18D',
    marginVertical: '3%',
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

  motoristaContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  motoristaName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

